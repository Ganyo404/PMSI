#!/usr/bin/env python3
"""
PMSI Repository Integrity & Self-Healing Validator
Script untuk mendeteksi:
1. Broken Wikilinks ([[...]])
2. Orphan Markdown Files (Node mengambang)
3. Mermaid Syntax Issues (Tanda kurung tanpa quotes, dsb)
4. Em-dash (—) & AI Slop Words (elevate, empower, seamless, dll)
5. Degree Centrality Dashboard.md
"""

import os
import re
import sys
from pathlib import Path

# Fix Windows console UTF-8 encoding
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE_ROOT = Path(r"c:\Kuliah\Semester 5\Manajemen Sistem Informasi (sms 5)\Praktikum\PMSI-main")


AI_SLOP_WORDS = [
    r"\belevate\b", r"\bempower\b", r"\bdelve\b", r"\brobust\b",
    r"\bseamless\b", r"\bcutting-edge\b", r"\brevolutionizing\b",
    r"\btapestry\b", r"\bpivotal\b", r"\bsecara mulus\b",
    r"\bdalam era modern ini\b", r"\bsangat penting untuk dicatat bahwa\b"
]

def get_all_workspace_files():
    canonical_md_files = {}  # rel_path -> full_path
    alias_map = {}          # alias -> canonical_rel_path
    other_files = []

    for root, dirs, files in os.walk(WORKSPACE_ROOT):
        # Skip .git, .gemini, .trash
        if any(ignored in root for ignored in [".git", ".gemini", ".trash"]):
            continue
        for file in files:
            full_path = Path(root) / file
            rel_path = str(full_path.relative_to(WORKSPACE_ROOT)).replace("\\", "/")
            if file.endswith(".md"):
                canonical_md_files[rel_path] = full_path
                base_no_ext = file[:-3]
                
                # Aliases
                alias_map[rel_path] = rel_path
                if rel_path.endswith(".md"):
                    alias_map[rel_path[:-3]] = rel_path
                alias_map[file] = rel_path
                alias_map[base_no_ext] = rel_path
                
                # If SKILL.md, alias by skill folder name
                if file.lower() == "skill.md":
                    parent_skill = Path(root).name
                    alias_map[parent_skill] = rel_path
            else:
                other_files.append((rel_path, full_path))
                
    return canonical_md_files, alias_map, other_files


def validate_repository():
    print("=" * 60)
    print("🩺 AUDIT INTEGRITAS REPOSITORI PMSI PERPUSTAKAAN FT UNY")
    print("=" * 60)
    
    md_files, alias_map, other_files = get_all_workspace_files()
    total_md = len(md_files)
    total_all = total_md + len(other_files)
    
    print(f"📁 Total Berkas Repositori: {total_all} berkas")
    print(f"   - Berkas Markdown: {total_md}")
    print(f"   - Berkas PDF, JSON, Skrip: {len(other_files)}\n")
    
    inbound_links = {rel: 0 for rel in md_files}
    outbound_links = {rel: [] for rel in md_files}
    broken_links = []
    mermaid_issues = []
    slop_issues = []
    em_dash_issues = []
    
    wikilink_pattern = re.compile(r"\[\[([^\]\|#]+)(?:[\|#][^\]]*)?\]\]")
    mermaid_block_pattern = re.compile(r"```mermaid\n(.*?)\n```", re.DOTALL)
    
    # Generic third-party skills to exclude from em-dash / slop checks
    generic_skills = ["diagnosing-bugs", "domain-modeling", "frontend-design", "problem-statement", "resolving-merge-conflicts", "web-design-guidelines"]
    
    for rel_path, file_path in md_files.items():
        try:
            with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                content = f.read()
        except Exception as e:
            print(f"❌ Gagal membaca {file_path}: {e}")
            continue
            
        # Strip code blocks and inline code for link checking
        cleaned_content = re.sub(r'```.*?```', '', content, flags=re.DOTALL)
        cleaned_content = re.sub(r'`[^`\n]+`', '', cleaned_content)

        # 1. Check Wikilinks
        links = wikilink_pattern.findall(cleaned_content)
        for link in links:
            clean_link = link.strip()
            outbound_links[rel_path].append(clean_link)
            
            target_rel = alias_map.get(clean_link)
            if not target_rel and clean_link.endswith(".md"):
                target_rel = alias_map.get(clean_link[:-3])
            
            if target_rel and target_rel in inbound_links:
                inbound_links[target_rel] += 1
            else:
                broken_links.append((rel_path, clean_link, file_path))
                
        # 2. Check Mermaid syntax
        mermaid_blocks = mermaid_block_pattern.findall(content)
        for block in mermaid_blocks:
            all_parens = re.findall(r'(\w+\[[^"\]]*\([^\)]*\)[^"\]]*\])', block)
            invalid_parens = [p for p in all_parens if not re.match(r'^\w+\[\([^\(\)]+\)\]$', p)]
            if invalid_parens:
                mermaid_issues.append((rel_path, invalid_parens))

        # Check Em-dash & AI Slop for PMSI files (exclude generic third-party skills)
        is_generic = any(g in rel_path for g in generic_skills)
        if not is_generic:
            if "—" in content:
                em_dash_issues.append((rel_path, content.count("—")))
                
            for slop in AI_SLOP_WORDS:
                matches = re.findall(slop, content, re.IGNORECASE)
                if matches:
                    slop_issues.append((rel_path, slop, len(matches)))

    # Print Report
    print("📊 1. HASIL AUDIT TAUTAN & GRAF:")
    if broken_links:
        print(f"  ⚠️  Ditemukan {len(broken_links)} tautan berpotensi rusak (Broken Wikilinks):")
        for src, target, path in broken_links[:10]:
            print(f"      - Di [{src}]: [[{target}]] (Target tidak ditemukan)")
        if len(broken_links) > 10:
            print(f"      ... dan {len(broken_links)-10} lainnya.")
    else:
        print("  ✅ 100% Seluruh Wikilink valid dan terhubung.")

    # Orphan nodes in core PMSI files
    core_orphans = [
        rel for rel, count in inbound_links.items() 
        if count == 0 and not any(g in rel for g in generic_skills) and not any(k in rel.lower() for k in ["dashboard", "workspace.json"])
    ]
    print(f"\n📊 2. SIMPUL TERISOLASI (ORPHAN NODES):")
    if core_orphans:
        print(f"  ⚠️  Ditemukan {len(core_orphans)} simpul inti tanpa inbound link:")
        for orphan in core_orphans[:8]:
            print(f"      - {orphan}")
    else:
        print("  ✅ 100% Seluruh berkas proyek inti terhubung penuh ke graf pengetahuan.")

    # Dashboard degree
    dash_rel = "00_DASHBOARD/Dashboard.md"
    dashboard_in = inbound_links.get(dash_rel, 0)
    dashboard_out = len(outbound_links.get(dash_rel, []))
    print(f"\n📊 3. DERAJAT GRAVITASI DASHBOARD:")
    print(f"  🌟 [[Dashboard]]: {dashboard_in} Inbound Links | {dashboard_out} Outbound Links (Total Degree: {dashboard_in + dashboard_out})")
    if dashboard_in + dashboard_out >= 30:
        print("  ✅ Status: Super-Hub Aktif (Ukuran partikel graf dominan).")
    else:
        print("  ⚠️ Status: Perlu penambahan koneksi ke Dashboard.")

    # Mermaid issues
    print(f"\n📊 4. INTEGRITAS DIAGRAM MERMAID:")
    if mermaid_issues:
        print(f"  ⚠️  Ditemukan {len(mermaid_issues)} blok diagram dengan label berisiko parse error:")
        for src, labels in mermaid_issues[:5]:
            print(f"      - Di [{src}]: {labels}")
    else:
        print("  ✅ Semua sintaks Mermaid bersih & memenuhi standar anti-crash.")

    # Prose & Slop
    print(f"\n📊 5. AUDIT GAYA BAHASA & ANTI-SLOP (BERKAS PROYEK PMSI):")
    if em_dash_issues:
        print(f"  ⚠️  Ditemukan em-dash (—) pada {len(em_dash_issues)} berkas:")
        for src, cnt in em_dash_issues[:5]:
            print(f"      - [{src}]: {cnt} tanda em-dash")
    else:
        print("  ✅ 100% Bebas tanda em-dash.")

    if slop_issues:
        print(f"  ⚠️  Ditemukan kata AI slop pada {len(slop_issues)} berkas:")
        for src, slop, cnt in slop_issues[:5]:
            print(f"      - [{src}]: '{slop}' ({cnt} kali)")
    else:
        print("  ✅ 100% Bebas AI slop words.")
        
    print("\n" + "=" * 60)
    print("🏁 AUDIT SELESAI")
    print("=" * 60)

if __name__ == "__main__":
    validate_repository()
