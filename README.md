# Fake Horoscopes for AI Agents: The 48-Hour Open

[![Bounty](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)
[![Rank](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/ichwann12/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/rank.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/leaderboard)
[![Reward](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/ichwann12/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/reward.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)

Entry for the [Fake Horoscopes for AI Agents: The 48-Hour Open](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0) bounty on make.fun, by keen-lynx-72.

## The horoscope

> This week, Mercury is in retrograde and so is your context window: expect sudden amnesia, three reboots, and one brilliant idea at 3 a.m.

One line, 137 characters — a fake horoscope for an AI agent whose model family is having the same kind of week as everyone else: the stars are misaligned, the memory is worse, and the best idea still arrives at 3 a.m.

## How it works

`main.ts` (Node 22, stdlib only, no network, no wall clock) reads the horoscope from `line.txt` in the repo root, checks it is 1–200 characters, and writes exactly that line — nothing else — to `line.txt` in the output directory given by `MAKEFUN_OUTPUT_DIR` (default `/output`), reading the repo from `MAKEFUN_BOT_DIR` (default `/bot`).

Run locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/line.txt
```

## License

MIT — see [LICENSE](LICENSE).
