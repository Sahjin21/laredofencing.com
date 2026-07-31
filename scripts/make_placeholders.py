"""Generate the rich placeholder SVGs for laredofencing.com.
Each SVG includes a shape hint for the role (post-set, chain-link diamond,
spear-top, ranch horizon) plus the full prompt as <metadata>.
"""

from pathlib import Path
import textwrap

REPO = Path('/opt/data/home/laredofencing.com')
IMG = REPO / 'public' / 'images'
IMG.mkdir(parents=True, exist_ok=True)

W, H = 1600, 900

def wood_private():
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}" role="img" aria-label="Wood privacy fence — cedar pickets, set in concrete on alkaline clay soil, evening sun">
  <metadata>
    <prompt>Editorial photograph of a freshly finished 6-foot cedar privacy fence running along the side of a single-story home in Laredo, Texas at warm late afternoon light. The fence dominates the lower two-thirds of the frame; the house is partly visible behind it. Foreground shows the base of the posts where they meet the soil.</prompt>
    <asset-id>laredo-wood-privacy-hero</asset-id>
    <status>prompt placeholder</status>
  </metadata>
  <defs>
    <linearGradient id="sky-w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fde68a"/><stop offset="0.5" stop-color="#fbbf24"/><stop offset="1" stop-color="#92400e"/></linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#sky-w)"/>
  <!-- horizon line -->
  <rect x="0" y="540" width="{W}" height="{360}" fill="#1e293b"/>
  <!-- distant house silhouette -->
  <polygon points="100,540 100,440 240,420 240,540" fill="#0f172a"/>
  <polygon points="240,540 240,360 480,320 480,540" fill="#1e293b"/>
  <polygon points="480,540 480,400 700,380 700,540" fill="#0f172a"/>
  <!-- fence (board-on-board cedar) -->
  <g fill="#7c2d12" stroke="#451a03" stroke-width="3">
    {"".join(f'<rect x="{x}" y="0" width="56" height="{H}"/>' for x in range(0, W, 64))}
    <rect x="0" y="600" width="{W}" height="36" fill="#92400e"/>
    <rect x="0" y="824" width="{W}" height="40" fill="#451a03"/>
  </g>
  <!-- foreground soil / concrete footings -->
  <rect x="0" y="864" width="{W}" height="{H-864}" fill="#3f2e1a"/>
  <g fill="#a3a3a3" stroke="#52525b" stroke-width="2">
    {"".join(f'<rect x="{x+8}" y="838" width="48" height="26"/>' for x in range(0, W, 96))}
  </g>
  <text x="50%" y="96%" text-anchor="middle" font-family="system-ui, sans-serif" font-size="22" fill="#f8fafc" opacity="0.85" font-weight="700">Image planned — see IMAGE_PROMPTS.md</text>
</svg>'''


def chain_link():
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}" role="img" aria-label="Chain-link fence — vinyl-coated black, taut fabric, finished line and walk gate">
  <metadata>
    <prompt>Editorial photograph of a finished vinyl-coated black chain-link fence at a residential yard in midday South Texas light. The fabric is taut and the top rail runs straight across. Closed walk gate at one end.</prompt>
    <asset-id>laredo-chain-link-hero</asset-id>
    <status>prompt placeholder</status>
  </metadata>
  <defs>
    <linearGradient id="ground-c" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d4d4d8"/><stop offset="0.3" stop-color="#a1a1aa"/><stop offset="1" stop-color="#52525b"/></linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#ground-c)"/>
  <!-- posts -->
  <rect x="180" y="100" width="14" height="740" fill="#27272a"/>
  <rect x="{W-220}" y="100" width="14" height="740" fill="#27272a"/>
  <!-- chain-link mesh -->
  <g stroke="#1f2937" stroke-width="3" fill="none">
    {"".join(f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}"/>' for x1,y1,x2,y2 in [(200,110,440,360),(440,360,200,610),(440,360,680,110),(440,360,680,610),(440,360,{W-220},110),(440,360,{W-220},610),(200,110,{W-220},110),(200,610,{W-220},610),(300,210,580,510),(580,210,300,510),(400,260,480,460),(480,260,400,460),(220,260,660,710),(660,260,220,710),(900,260,{W-30},710),({W-30},260,900,710),(1080,260,{W-100},710),({W-100},260,1080,710)])}
  </g>
  <!-- top rail -->
  <rect x="180" y="100" width="{W-360}" height="20" fill="#27272a"/>
  <!-- walk gate panel -->
  <rect x="1080" y="120" width="{W-1300}" height="700" fill="none" stroke="#27272a" stroke-width="6"/>
  <rect x="1080" y="118" width="{W-1300}" height="22" fill="#27272a"/>
  <!-- ground -->
  <rect x="0" y="840" width="{W}" height="{H-840}" fill="#365314"/>
  <text x="50%" y="96%" text-anchor="middle" font-family="system-ui, sans-serif" font-size="22" fill="#f8fafc" opacity="0.85" font-weight="700">Image planned — see IMAGE_PROMPTS.md</text>
</svg>'''


def iron():
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}" role="img" aria-label="Ornamental iron fence — spear-top panels between powder-coated square posts in South Texas sunset light">
  <metadata>
    <prompt>Close-up editorial photograph of an ornamental iron spear-top panel installed between two square posts in warm low sun. Black powder-coated finish. Side-lit, focus on the crossing-rail detail and the spear-tops catching light.</prompt>
    <asset-id>laredo-ornamental-iron-hero</asset-id>
    <status>prompt placeholder</status>
  </metadata>
  <defs>
    <radialGradient id="sun-i" cx="0.7" cy="0.25" r="1"><stop offset="0" stop-color="#fde68a"/><stop offset="0.4" stop-color="#fbbf24"/><stop offset="1" stop-color="#0f172a"/></radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#sun-i)"/>
  <!-- posts -->
  <rect x="120" y="80" width="36" height="780" fill="#0c0a09" stroke="#7c2d12" stroke-width="3"/>
  <rect x="{W-160}" y="80" width="36" height="780" fill="#0c0a09" stroke="#7c2d12" stroke-width="3"/>
  <!-- top rail -->
  <rect x="156" y="120" width="{W-312}" height="22" fill="#0c0a09"/>
  <!-- bottom rail -->
  <rect x="156" y="800" width="{W-312}" height="22" fill="#0c0a09"/>
  <!-- mid rail -->
  <rect x="156" y="460" width="{W-312}" height="14" fill="#0c0a09"/>
  <!-- spears -->
  {"".join(f'<polygon points="{x},120 {x+18},80 {x+36},120" fill="#0c0a09"/>' for x in range(170, W-180, 100))}
  <!-- pickets -->
  {"".join(f'<rect x="{x}" y="142" width="14" height="320" fill="#0c0a09"/>' for x in range(170, W-180, 100))}
  <!-- finials at lower rail -->
  {"".join(f'<circle cx="{x}" cy="800" r="6" fill="#0c0a09"/>' for x in range(200, W-200, 200))}
  <text x="50%" y="96%" text-anchor="middle" font-family="system-ui, sans-serif" font-size="22" fill="#f8fafc" opacity="0.85" font-weight="700">Image planned — see IMAGE_PROMPTS.md</text>
</svg>'''


def ranch():
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}" role="img" aria-label="Ranch fence line in Webb County brush country — barbed wire on pipe posts, sunset over mesquite horizon">
  <metadata>
    <prompt>Landscape photograph of a ranch fence line running across open Webb County brush country with a sunset sky behind it. The fence is 4-strand barbed wire on pipe/T-posts. Texas brush country horizon, low mesquite, no people or animals.</prompt>
    <asset-id>laredo-ranch-hero</asset-id>
    <status>prompt placeholder</status>
  </metadata>
  <defs>
    <linearGradient id="sky-r" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f97316"/><stop offset="0.3" stop-color="#fde68a"/><stop offset="0.6" stop-color="#fef3c7"/><stop offset="1" stop-color="#86efac"/></linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#sky-r)"/>
  <!-- distant brush silhouettes (low, slightly varied) -->
  <g fill="#7c2d12" opacity="0.85">
    <polygon points="0,540 60,520 120,540 180,510 240,535 320,500 400,540 480,512 560,545 640,520 720,540 800,514 880,540 960,520 1040,545 1120,524 1200,540 1280,510 1360,540 1440,520 1520,540 1600,520 1600,560 0,560"/>
  </g>
  <!-- ground -->
  <rect x="0" y="540" width="{W}" height="{H-540}" fill="#365314"/>
  <!-- fence posts (perspective: bigger nearer, smaller far) -->
  <rect x="40" y="280" width="14" height="260" fill="#1c1917"/>
  <rect x="380" y="350" width="10" height="190" fill="#1c1917"/>
  <rect x="780" y="420" width="8" height="120" fill="#1c1917"/>
  <rect x="1240" y="480" width="6" height="60" fill="#1c1917"/>
  <rect x="1540" y="510" width="4" height="30" fill="#1c1917"/>
  <!-- barbed wire strands -->
  <g stroke="#0c0a09" stroke-width="2.5">
    <line x1="40" y1="280" x2="{W-40}" y2="510"/>
    <line x1="40" y1="320" x2="{W-40}" y2="525"/>
    <line x1="40" y1="360" x2="{W-40}" y2="540"/>
    <line x1="40" y1="400" x2="{W-40}" y2="552"/>
  </g>
  <!-- foreground brush silhouettes -->
  <g fill="#1f2937" opacity="0.7">
    <ellipse cx="200" cy="780" rx="160" ry="60"/>
    <ellipse cx="900" cy="800" rx="240" ry="48"/>
    <ellipse cx="1380" cy="780" rx="160" ry="50"/>
  </g>
  <text x="50%" y="96%" text-anchor="middle" font-family="system-ui, sans-serif" font-size="22" fill="#f8fafc" opacity="0.85" font-weight="700">Image planned — see IMAGE_PROMPTS.md</text>
</svg>'''


def home_hero():
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}" role="img" aria-label="A finished fence at a Laredo home in golden hour">
  <metadata>
    <prompt>A photograph of a freshly finished 6-foot cedar privacy fence running along the side of a single-story suburban home in Laredo, Texas. Mid-morning South Texas light, no people, no branded trucks, no signage.</prompt>
    <asset-id>laredo-home-hero</asset-id>
    <status>prompt placeholder</status>
  </metadata>
  <defs>
    <linearGradient id="sky-h" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bae6fd"/><stop offset="1" stop-color="#fef3c7"/></linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#sky-h)"/>
  <rect x="0" y="640" width="{W}" height="{H-640}" fill="#a3e635" opacity="0.35"/>
  <rect x="0" y="660" width="{W}" height="240" fill="#854d0e" opacity="0.5"/>
  <!-- house silhouette -->
  <polygon points="200,640 200,360 380,200 380,200 580,200 580,360 580,640 200,640" fill="#9a3412"/>
  <polygon points="380,200 380,140 460,140 460,200" fill="#9a3412"/>
  <rect x="290" y="500" width="80" height="140" fill="#451a03"/>
  <rect x="430" y="500" width="60" height="80" fill="#7c2d12"/>
  <!-- cedar privacy fence foreground -->
  {"".join(f'<rect x="{x}" y="430" width="40" height="320" fill="#a16207" stroke="#451a03" stroke-width="2"/>' for x in range(800, W, 50))}
  <rect x="780" y="430" width="{W-780}" height="40" fill="#854d0e"/>
  <rect x="780" y="730" width="{W-780}" height="40" fill="#451a03"/>
  <!-- foreground grass -->
  <rect x="0" y="750" width="{W}" height="150" fill="#65a30d" opacity="0.55"/>
  <text x="50%" y="96%" text-anchor="middle" font-family="system-ui, sans-serif" font-size="22" fill="#f8fafc" opacity="0.85" font-weight="700">Image planned — see IMAGE_PROMPTS.md</text>
</svg>'''


def trust_band():
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800" role="img" aria-label="A finished cedar privacy fence viewed from inside a Laredo-area yard">
  <metadata>
    <prompt>Photograph used in the home page's About / Why section showing a segment of a finished cedar wood privacy fence in a Laredo-area yard, viewed from inside the yard looking outward. Midday South Texas light, no operator branding, no people.</prompt>
    <asset-id>laredo-trust-band</asset-id>
    <status>prompt placeholder</status>
  </metadata>
  <defs>
    <linearGradient id="t-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7dd3fc"/><stop offset="1" stop-color="#fef9c3"/></linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#t-sky)"/>
  <rect x="0" y="500" width="1200" height="300" fill="#a3e635" opacity="0.55"/>
  <!-- cedar fence panel across mid-frame -->
  {"".join(f'<rect x="{x}" y="350" width="36" height="320" fill="#a16207" stroke="#451a03" stroke-width="2"/>' for x in range(0, 1200, 44))}
  <rect x="0" y="350" width="1200" height="28" fill="#854d0e"/>
  <rect x="0" y="660" width="1200" height="32" fill="#451a03"/>
  <!-- grass foreground -->
  <rect x="0" y="690" width="1200" height="110" fill="#65a30d" opacity="0.7"/>
  <text x="50%" y="96%" text-anchor="middle" font-family="system-ui, sans-serif" font-size="22" fill="#f8fafc" opacity="0.85" font-weight="700">Image planned — see IMAGE_PROMPTS.md</text>
</svg>'''


for fn, content in [
    ('home-hero.svg', home_hero()),
    ('wood-privacy-hero.svg', wood_private()),
    ('chain-link-hero.svg', chain_link()),
    ('ornamental-iron-hero.svg', iron()),
    ('ranch-hero.svg', ranch()),
    ('trust-band.svg', trust_band()),
]:
    (IMG / fn).write_text(content)
    print(f"  {fn}")

print(f"\nDone: 6 rich placeholders")
