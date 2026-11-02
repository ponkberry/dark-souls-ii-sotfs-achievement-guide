# Dark Souls II: Scholar of the First Sin Achievement Guide

A step-by-step walkthrough paired with achievement, spell, and covenant trackers. Progress is saved
in the browser's localStorage and can be exported/imported as JSON.

## Pages

- **Walkthrough** - area-by-area route through the game, DLC, clean-up, NG+, and NG++, with achievement
  callouts and per-step spell checkboxes.
- **Achievements** - all 38 Steam achievements. Master achievements, multi-part achievements, and
  The Dark Soul complete automatically from your other progress.
- **Spells** - all 106 spells, including the 11 DLC spells required in Scholar of the First Sin.
- **Covenants** - all nine covenants with ranks and rewards.

## Sources

- Achievements and icons: [Steam global achievements](https://steamcommunity.com/stats/335300/achievements/)
- Everything else: ["Dark Souls II: Scholar of the First Sin 100% Achievement Guide"](https://steamcommunity.com/sharedfiles/filedetails/?id=419088382)
  by ponkberry.

## Development

```bash
npm install
npm run dev      # http://localhost:5173/dark-souls-ii-sotfs-achievement-guide/
npm run build    # type-checks and builds into docs/ for GitHub Pages
npm run lint
```

Deployed from `docs/` on the default branch via GitHub Pages, served at
`https://ponkberry.github.io/dark-souls-ii-sotfs-achievement-guide/`.

localStorage keys are prefixed `ds2-sotfs-` so progress doesn't collide with the other guides on the
same `ponkberry.github.io` origin.
