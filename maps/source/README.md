# The optional pinned world save

Drop an FMG save here to pin the world the dev server boots into:

```
maps/source/world.map
```

Save it from FMG with **File ▸ Save** (it writes a `.map` file), then open:

<http://localhost:3445/fmg/?maplink=/maps/world.map>

The `?maplink=` parameter takes an absolute URL; the dev server rewrites the
relative form to an absolute one before FMG's modules evaluate, so the short
form above works as-is.

Files in this folder are **gitignored** (`*.map`, `*.json`) — a world save is
yours, never ours to rewrite or commit.
