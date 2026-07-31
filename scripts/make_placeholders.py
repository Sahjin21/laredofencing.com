#!/usr/bin/env python3
"""Generate the 6 placeholder SVGs for laredofencing.com launch."""
from pathlib import Path

REPO = Path('/opt/data/home/laredofencing.com')
IMG = REPO / 'public' / 'images'
IMG.mkdir(parents=True, exist_ok=True)

ASSETS = [
    {
        'id': 'laredo-home-hero',
        'filename': 'home-hero.svg',
        'w': 1600, 'h': 900,
        'role': 'home hero - real installed fence in Laredo setting',
    },
    {
        'id': 'laredo-wood-privacy-hero',
        'filename': 'wood-privacy-hero.svg',
        'w': 1600, 'h': 900,
        'role': 'wood privacy fence post-set detail',
    },
    {
        'id': 'laredo-chain-link-hero',
        'filename': 'chain-link-hero.svg',
        'w': 1600, 'h': 900,
        'role': 'chain-link residential fence, finished line',
    },
    {
        'id': 'laredo-ornamental-iron-hero',
        'filename': 'ornamental-iron-hero.svg',
        'w': 1600, 'h': 900,
        'role': 'spear-top ornamental iron panel detail',
    },
    {
        'id': 'laredo-ranch-hero',
        'filename': 'ranch-hero.svg',
        'w': 1600, 'h': 900,
        'role': 'ranch fence line in Webb County brush country',
    },
    {
        'id': 'laredo-trust-band',
        'filename': 'trust-band.svg',
        'w': 1200, 'h': 800,
        'role': 'finished cedar privacy fence viewed from inside a yard',
    },
]

TEMPLATE = '''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}" role="img" aria-label="Image placeholder: {role}">
  <metadata>
    <prompt>{role}</prompt>
    <asset-id>{id}</asset-id>
    <status>prompt placeholder</status>
    <replacement-owner>operator</replacement-owner>
    <replacement-deadline>30 days from launch</replacement-deadline>
  </metadata>
  <defs>
    <pattern id="hatch" patternUnits="userSpaceOnUse" width="32" height="32" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="32" stroke="#0f766e" stroke-width="3" opacity="0.18"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="#f8fafc"/>
  <rect width="100%" height="100%" fill="url(#hatch)"/>
  <g font-family="system-ui, sans-serif" fill="#0f766e">
    <text x="50%" y="46%" text-anchor="middle" font-size="56" font-weight="900" letter-spacing="0.04em">IMAGE PLANNED</text>
    <text x="50%" y="56%" text-anchor="middle" font-size="22" fill="#475569">{role}</text>
    <text x="50%" y="63%" text-anchor="middle" font-size="18" fill="#94a3b8">Asset ID: {id}</text>
    <text x="50%" y="69%" text-anchor="middle" font-size="18" fill="#94a3b8">{w} x {h}</text>
  </g>
  <rect x="4" y="4" width="calc(100% - 8px)" height="calc(100% - 8px)" fill="none" stroke="#0f766e" stroke-width="2" stroke-dasharray="6 6" opacity="0.3"/>
</svg>
'''

for a in ASSETS:
    body = TEMPLATE.format(w=a['w'], h=a['h'], role=a['role'], id=a['id'])
    (IMG / a['filename']).write_text(body)
    print(f"  {a['filename']}  ({a['w']}x{a['h']})")

print(f"\nWrote {len(ASSETS)} placeholder SVGs to {IMG}")
