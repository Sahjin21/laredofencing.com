"""
Write all 34 template files extracted by plan.py into the laredofencing.com
project root. Each file is written with its exact source contents from the spec.
"""
import json
from pathlib import Path

REPO = Path('/opt/data/home/laredofencing.com')
DATA = json.loads((REPO / 'scripts/files.json').read_text())

# Sanity: paths should not be absolute or contain ..
for f in DATA:
    p = f['path']
    assert not p.startswith('/'), f'Absolute path: {p}'
    assert '..' not in p, f'Escaping path: {p}'

written = 0
for f in DATA:
    target = REPO / f['path']
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(f['content'] + '\n')
    written += 1

print(f'Wrote {written} files to {REPO}')
