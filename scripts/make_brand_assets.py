"""
Generate PNG assets for laredofencing.com brand mark and OG image.
Reads SVG sources from /public/, produces the standard favicon/PNG stack.
"""
import sys
from pathlib import Path
import io

REPO = Path('/opt/data/home/laredofencing.com')
PUBLIC = REPO / 'public'

def render():
    try:
        import cairosvg
        from PIL import Image
    except ImportError as e:
        print(f'missing dep: {e}', file=sys.stderr)
        print('Install with: pip install pillow cairosvg', file=sys.stderr)
        sys.exit(1)

    mark = (PUBLIC / 'favicon.svg').read_bytes()
    og = (PUBLIC / 'og-default.svg').read_bytes()

    sizes = [
        ('favicon-16x16.png', 16),
        ('favicon-32x32.png', 32),
        ('apple-touch-icon.png', 180),
        ('icon-192.png', 192),
        ('icon-512.png', 512),
    ]
    for name, size in sizes:
        cairosvg.svg2png(
            bytestring=mark,
            output_width=size,
            output_height=size,
            write_to=str(PUBLIC / name),
        )
    cairosvg.svg2png(
        bytestring=og,
        output_width=1200,
        output_height=630,
        write_to=str(PUBLIC / 'og-default.png'),
    )

    # favicon.ico — multi-size bundle
    img16 = Image.open(PUBLIC / 'favicon-16x16.png')
    img32 = Image.open(PUBLIC / 'favicon-32x32.png')
    buf48 = io.BytesIO()
    cairosvg.svg2png(bytestring=mark, output_width=48, output_height=48, write_to=buf48)
    buf48.seek(0)
    img48 = Image.open(buf48)

    img16.save(
        PUBLIC / 'favicon.ico',
        format='ICO',
        sizes=[(16, 16), (32, 32), (48, 48)],
        append_images=[img32, img48],
    )

    print('Generated:')
    for p in sorted(PUBLIC.iterdir()):
        if p.name.startswith(('favicon', 'icon-', 'apple-touch-icon', 'og-default')):
            print(f'  {p.name:30s}  {p.stat().st_size:8d} bytes')


if __name__ == '__main__':
    render()
