# The World in One Day — Wednesday 18 November 2026

A one-page newspaper front page summing up the world's news of
Wednesday 18 November 2026, drawn entirely in code.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png (1024x1024, ~21 KB)
```

`main.ts` is pure Node standard library: a tiny raster canvas, a 5x7 bitmap
font, and a hand-rolled PNG encoder. No network, no fonts, no image assets —
every pixel is drawn by the program, so two runs write identical bytes.

## Stories (researched 18 Nov 2026 WIB — the day was ~7 hours old in UTC
when built, so these are the events reported on 18 November)

- **Hero — APEC opens in Shenzhen:** Xi chairs the 33rd leaders' summit
  as Trump arrives from Manila; the first Xi–Trump–Putin meeting is set
  for Thursday. (Aju Press; Global South World; Lowy Institute)
- **US strikes reported on Qeshm Island:** reports say US forces hit the
  Strait of Hormuz island as tensions spike; Iran claims a 2M-barrel
  tanker sank. (Islamabad Post; The Press Reporter, 18 Nov pages)
- **Knesset blow for Netanyahu:** parliament elects a Gadi Eisenkot ally
  as Speaker, a setback for the prime minister's camp.
  (The Press Reporter, 18 Nov)
- **Cyclone Akvan nears India:** storm over the Bay of Bengal set to turn
  severe by Thursday. (Jagran Josh; Education Times, 18 Nov headlines)
- **Canada, China extend trade:** Xi meets Carney ahead of APEC as Ottawa
  and Beijing deepen cooperation. (Education Times; Jagran Josh)
- **Dhoni retires from the IPL:** MS Dhoni ends his playing career and
  becomes Chennai Super Kings mentor. (Education Times; The Daily Jagran)

## Design

Newspaper front page: masthead + date, one hero story with a drawn Shenzhen
skyline, five story panels with small code-drawn illustrations, sources in
the footer. Palette follows the 21st.dev pattern — neutral paper with a
single strong accent (red) and navy.

## Entry

- Competition: `news-image-20261118` (make.fun) — "Sum up 18 November's
  world news in one image". Entry $0, deadline 20 Nov 2026 07:00 WIB.
- License: MIT. Claim file `.makefun/owner.json` names the bounty wallet.
