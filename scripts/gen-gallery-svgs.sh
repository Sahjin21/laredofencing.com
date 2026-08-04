#!/bin/bash
# Generate 24 SVG placeholders for the service-detail galleries.
# Each is 800x1067 (3:4 portrait), honest "Image planned" tile with
# the asset ID and a short prompt summary. See IMAGE_PROMPTS.md.

set -euo pipefail

OUT_DIR="/opt/data/home/laredofencing.com/public/images"
mkdir -p "$OUT_DIR"

# Each entry: <asset_id>|<title>|<primary_color>|<accent_color>
ENTRIES=(
  "laredo-wood-privacy-gallery-01|Cedar post-set detail|#a17a4a|#e8dcc4"
  "laredo-wood-privacy-gallery-02|Hanging rails on a 6ft run|#a17a4a|#e8dcc4"
  "laredo-wood-privacy-gallery-03|Board-on-board picket close-up|#a17a4a|#e8dcc4"
  "laredo-wood-privacy-gallery-04|Walking the line at completion|#a17a4a|#e8dcc4"
  "laredo-wood-privacy-gallery-05|Cap detail on a corner|#a17a4a|#e8dcc4"
  "laredo-wood-privacy-gallery-06|Gate hardware install|#a17a4a|#e8dcc4"
  "laredo-chain-link-gallery-01|Vinyl-coated line post set|#1f2937|#374151"
  "laredo-chain-link-gallery-02|Stretched fabric mid-run|#1f2937|#374151"
  "laredo-chain-link-gallery-03|Close-up of the diamond pattern|#1f2937|#374151"
  "laredo-chain-link-gallery-04|Bottom rail at grade|#1f2937|#374151"
  "laredo-chain-link-gallery-05|Walk-gate install|#1f2937|#374151"
  "laredo-chain-link-gallery-06|Long run at completion|#1f2937|#374151"
  "laredo-wrought-iron-gallery-01|Spear-top panel close-up|#0f172a|#475569"
  "laredo-wrought-iron-gallery-02|Welding the panel to the post|#0f172a|#475569"
  "laredo-wrought-iron-gallery-03|Pool-code enclosure layout|#0f172a|#475569"
  "laredo-wrought-iron-gallery-04|Powder-coat finish detail|#0f172a|#475569"
  "laredo-wrought-iron-gallery-05|Fluted post detail|#0f172a|#475569"
  "laredo-wrought-iron-gallery-06|Long front-yard run|#0f172a|#475569"
  "laredo-ranch-gallery-01|Brace-assembly on a corner|#92400e|#fde68a"
  "laredo-ranch-gallery-02|Pipe-and-cable run at completion|#92400e|#fde68a"
  "laredo-ranch-gallery-03|T-post driver detail|#92400e|#fde68a"
  "laredo-ranch-gallery-04|Barbed wire close-up|#92400e|#fde68a"
  "laredo-ranch-gallery-05|Game fence on a slope|#92400e|#fde68a"
  "laredo-ranch-gallery-06|Field fence at the gate|#92400e|#fde68a"
)

for entry in "${ENTRIES[@]}"; do
  IFS='|' read -r asset_id title primary accent <<< "$entry"
  filename="${asset_id}.svg"
  cat > "$OUT_DIR/$filename" <<XML
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1067" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${title}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${primary}" stop-opacity="0.18"/>
      <stop offset="1" stop-color="${accent}" stop-opacity="0.32"/>
    </linearGradient>
    <pattern id="frame" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
      <rect width="80" height="80" fill="url(#g)"/>
      <line x1="0" y1="0" x2="80" y2="80" stroke="${primary}" stroke-opacity="0.06" stroke-width="1"/>
      <line x1="80" y1="0" x2="0" y2="80" stroke="${primary}" stroke-opacity="0.06" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="800" height="1067" fill="url(#frame)"/>
  <rect x="24" y="24" width="752" height="1019" fill="none" stroke="${primary}" stroke-opacity="0.35" stroke-width="2" stroke-dasharray="6 6"/>
  <g transform="translate(400 470)">
    <rect x="-150" y="-32" width="300" height="64" rx="8" fill="white" fill-opacity="0.92"/>
    <text x="0" y="-4" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="${primary}" text-anchor="middle" letter-spacing="1.5">IMAGE PLANNED</text>
    <text x="0" y="20" font-family="ui-monospace, monospace" font-size="11" fill="#475569" text-anchor="middle">${asset_id}</text>
  </g>
  <text x="400" y="568" font-family="ui-serif, Georgia, serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">${title}</text>
  <foreignObject x="40" y="660" width="720" height="350">
    <div xmlns="http://www.w3.org/1999/xhtml" style="font-family: ui-sans-serif, system-ui, sans-serif; font-size: 13px; line-height: 1.55; color: #334155; background: rgba(255,255,255,0.85); padding: 16px 18px; border-radius: 8px;">
      <strong style="display: block; font-size: 11px; letter-spacing: 1px; color: ${primary}; margin-bottom: 6px;">PROMPT</strong>
      ${title}. Worker-phone aesthetic: candid framing, slightly overexposed South Texas sun, real mess in frame. See IMAGE_PROMPTS.md for the full prompt.
    </div>
  </foreignObject>
</svg>
XML
done

echo "Created $(ls "$OUT_DIR"/*-gallery-*.svg | wc -l) gallery SVG placeholders"