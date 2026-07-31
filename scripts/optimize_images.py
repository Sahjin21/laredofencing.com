"""Optimize the Laredo Fence Pros webp hero images.

Source files come from the operator (committed via GitHub web upload):
  public/images/laredo-home-hero.webp             (1376x768, 174 KB)
  public/images/laredo-wood-privacy-hero.webp     (1200x896, 149 KB)
  public/images/laredo-chain-link-hero.webp       (1376x768, 277 KB)
  public/images/laredo-ornamental-iron-hero.webp  (1024x1024, 55 KB)
  public/images/laredo-ranch-hero.webp            (1376x768, 194 KB)
  public/images/laredo-trust-band.webp            (1408x768, 134 KB)

Output policy:
  - *-hero.webp at HERO_MAX_WIDTH px max, quality 75, method 6 (in place).
  - *-hero-card.webp at CARD_MAX_WIDTH px max, quality 72, method 6 (new file).
    Used for service card thumbnails and small-format section bands.

Why method=6 (slowest):
  - 1s of CPU per image on Vercel. For a 6-image site, totally fine.
  - 20-30% smaller at the same perceptual quality.

Why quality 75 (hero) / 72 (card):
  - 75 is the sweet spot for hero photography on the web.
  - 72 is fine for card thumbnails that are 50% the original resolution.
"""
from pathlib import Path
from PIL import Image

REPO = Path('/opt/data/home/laredofencing.com')
SRC = REPO / 'public' / 'images'

HERO_MAX_WIDTH = 1600
CARD_MAX_WIDTH = 800
HERO_QUALITY = 75
CARD_QUALITY = 72


def optimize(src, max_width, quality):
    image = Image.open(src).convert('RGB')
    w, h = image.size
    if w > max_width:
        new_w = max_width
        new_h = round(h * (new_w / w))
        image = image.resize((new_w, new_h), Image.LANCZOS)
    image.save(src, format='WEBP', quality=quality, method=6, lossless=False)
    return src.stat().st_size


def make_card_variant(src, max_width, quality):
    image = Image.open(src).convert('RGB')
    w, h = image.size
    if w > max_width:
        new_w = max_width
        new_h = round(h * (new_w / w))
        image = image.resize((new_w, new_h), Image.LANCZOS)
    out = src.with_name(src.stem + '-card.webp')
    image.save(out, format='WEBP', quality=quality, method=6, lossless=False)
    return out.stat().st_size


def main():
    files = sorted(SRC.glob('laredo-*.webp'))
    # Exclude already-rendered card variants so we don't double-process them.
    files = [f for f in files if '-card' not in f.stem]
    if not files:
        print('No webp files found.')
        return

    print(f'{"name":<48s}  {"before":>9s} → {"hero":>9s}  {"card":>9s}  {"savings":>8s}')
    print('-' * 92)
    total_b, total_h, total_c = 0, 0, 0

    for src in files:
        before = src.stat().st_size
        hero_bytes = optimize(src, HERO_MAX_WIDTH, HERO_QUALITY)
        card_bytes = make_card_variant(src, CARD_MAX_WIDTH, CARD_QUALITY)

        total_b += before
        total_h += hero_bytes
        total_c += card_bytes

        savings = round((1 - (hero_bytes + card_bytes) / (before * 2)) * 100)
        print(f'  {src.name:<46s}  {before/1024:7.1f}K → {hero_bytes/1024:7.1f}K  {card_bytes/1024:7.1f}K  {savings:>5d}%')

    print('-' * 92)
    combined = (total_h + total_c) / 1024
    original = (total_b * 2) / 1024
    savings = round((1 - combined / original) * 100)
    print(f'  {"TOTAL":<46s}  {total_b/1024:7.1f}K → {total_h/1024:7.1f}K+{total_c/1024:7.1f}K')
    print(f'  Original if both kept at 2x: {original:.1f}K → Optimized both: {combined:.1f}K  ({savings}% smaller)')


if __name__ == '__main__':
    main()
