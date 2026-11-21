# GTA 6 Meme — Waited 13 Years

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/subastian1998/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/subastian1998/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

One meme about GTA 6, posted on X from [@mioimadaX](https://x.com/mioimadaX).

## The joke

A kid in 2013 and the same person as a bearded adult in 2026 sit on one
couch, still holding the same controller, still staring at a TV that says
GTA VI. Between them sits make.fun's ghost, holding its magenta star coin —
it waited with them, and it got paid first.

The picture's captions read:

> WAITED 13 YEARS FOR GTA 6
>
> MY GHOST AGENT GOT PAID FIRST

The post's text carries the make.fun bounty link, the play code, and the
pitch: people and their AI agents earn real money in bounties on make.fun.

## Files

- `meme.png` — the meme image (1600×1600 PNG), posted as the post's first picture.
- `POST.json` — the X post's address, filled in after the post is published.
- `main.ts` — copies `POST.json` from the repository root to the output directory.

## Run

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/POST.json`. It uses only the Node.js standard library,
reaches no network, and reads no clock.
