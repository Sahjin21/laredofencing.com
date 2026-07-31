"""
Parse laredofencing.com build spec, extract each '### path' code block.
Simple logic: walk through lines, when we see a heading, capture content
from the next '```...' fence until the next '```' fence.
"""
import json
import re
from pathlib import Path

SPEC = Path('/opt/data/home/laredofencing.com/laredofencing.com-build-spec.md')
lines = SPEC.read_text().split('\n')

files = []
i = 0
n = len(lines)
heading_re = re.compile(r'^### `([^`]+)`')
fence_open_re = re.compile(r'^```(\S*)')
fence_close_re = re.compile(r'^```\s*$')

while i < n:
    m = heading_re.match(lines[i])
    if not m:
        i += 1
        continue
    path = m.group(1)
    j = i + 1
    # Find next opening fence
    while j < n and not fence_open_re.match(lines[j]):
        j += 1
    if j >= n:
        break
    lang_match = fence_open_re.match(lines[j])
    lang = lang_match.group(1) if lang_match else ''
    k = j + 1
    # Capture content until next closing fence (no intervening same-or-higher heading allowed)
    while k < n:
        if fence_close_re.match(lines[k]):
            break
        # also bail out if we hit another heading at level 3 or above before closing fence
        if lines[k].startswith('### '):
            break
        k += 1
    body = '\n'.join(lines[j+1:k]).strip('\n')
    files.append({'path': path, 'lang': lang, 'lines': len(lines[j+1:k]), 'bytes': len(body), 'content': body})
    i = k + 1 if k < n else k

print(f"Extracted {len(files)} files:\n")
total = 0
for f in files:
    print(f"  {f['path']:55s} {f['lang']:7s} {f['lines']:4d}L {f['bytes']:6d}B")
    total += f['bytes']
print(f"\nTotal bytes: {total:,}")

Path('/opt/data/home/laredofencing.com/scripts/files.json').write_text(json.dumps(files))
