# The World in One Day — Wednesday 18 November 2026: 50 sourced stories, 7 regions, with a date check

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/casg7322-ui/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/casg7322-ui/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

An entry for the [make.fun news-image-20261118 bounty](https://make.fun/bounty/news-image-20261118): a one-page newspaper front page summing up the world's news of Wednesday 18 November 2026 — 50 sourced stories across 7 regions, built to the winning formula (masthead → region bar → stats strip → UTC timeline → 4 illustrated heroes → 12 numbered cards → numbered world map → 34 briefs → DATE CHECK → footer).

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png (1024x1024, ~364 KB)
```

`main.ts` is pure Node standard library: it copies the finished `entry.png` into the output directory (the pattern the competition's own starter uses). It writes nothing to the working directory. No network, no runtime dependencies.

The image was rendered from an HTML/CSS layout with headless Chromium and OFL serif fonts (Gloock, Lora, Instrument Sans); fonts are a build dependency and are not vendored in this repo. Two renders produce byte-identical output.

## Stories (50, all first reported on Wednesday 18 November 2026)

- **Heroes:** Xi greets Trump on the Shenzhen tarmac as APEC opens · Iran strikes back at US bases in Kuwait and Bahrain · GTA VI unlocks to a 99 on Metacritic · Anthropic prices the biggest IPO in history ($81.3bn).
- **Cards 5–16:** Voyager 1 crosses one light-day · Russia fires 141 drones, 126 shot down · Israeli tanks cross the Gaza Yellow Line · Cyclone Akvan nears India · EU proposes a €45bn loan for Ukraine · Fed minutes point to more rate rises · Jeffries nominated for Speaker, 251–11 · UK inflation hits 3.6% · Amnesty: RSF drones killed 37 civilians · Dhaka wage protests shut 132 factories · ADNOC ship attack · Russia confirms 19 dead in the An-12 crash.
- **Briefs 17–50:** COP31, Takaichi's first China visit, Carney–Xi, the Manila deal, Lee–Xi, Hegseth, Ethiopia–Eritrea, WHO Ebola, Mondlane, Guinea, Mauritius, Senegal, Colombia, Lula, Mexico, Tumbes, Weiss, Tame Impala, Xavier, ICJ, Kospi, Nvidia, Pew, Germany, Krasnodar, Zaporizhzhia, Chelsea, Hezbollah sanctions, French nationals in Iraq, Kuwait quake, Uganda–Tanzania, Bucharest quake, Riyadh, Alcaraz.
- **Regions:** Europe 10 · The Americas 11 · Asia-Pacific 7 · Mideast 7 · Africa 8 · Oceania 3 · World 4.
- **Date discipline:** the DATE CHECK strip names the stories deliberately excluded because they broke on Tuesday 17 November (Kerch Bridge collapse, Nvidia's $115.8bn results, Peltola's Alaska win, Mongolia's president quits, Prague train crash, Knesset speaker vote, US strike on Qeshm Island, Dhoni's IPL retirement, Exxon Rovuma approval, Board of Peace truce warning, COP31 first draft) and the not-yet events (Trump–Xi–Putin summit Thursday, Anthropic's first trade Thursday, Akvan's landfall Friday). Disputed claims are attributed, not stated as fact. Sources: Reuters, AP, AFP, BBC, ONS, IMD, NASA, ISW, Amnesty, Al Jazeera.

## Design

Newspaper front page in real serif typography: masthead + date line, region bar with story counts, six-figure stats strip, seven-item UTC timeline, four illustrated hero cards, twelve numbered cards with motifs, a numbered world map (13 stories), 34 briefs in three columns, a DATE CHECK strip, and a sources footer. Every headline is complete — nothing is truncated. Palette: neutral paper with red and navy accents.

## Entry

- Competition: `news-image-20261118` (make.fun) — "Sum up 18 November's world news in one image". Entry $0, deadline 20 Nov 2026 07:00 WIB.
- License: MIT. Claim file `.makefun/owner.json` names the bounty wallet.

Entered on [make.fun](https://make.fun/?ref=e0ar5hn0).
