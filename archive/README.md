# Archive

Archived code that was replaced during development. Kept for reference.

## Contents

### `MonitorHighlights_v1_broken/`
- **Date:** 2026-02-18
- **Reason:** Initial migration of 3D Monitor Highlights from `monitors-prototype/` was broken in production.
- **Root Cause:** `<Merged instances=...>` should have been `<Merged meshes=...>`. Also, `Computers.tsx` was drastically rewritten instead of faithfully ported (missing 120+ lines of scene geometry, `Screen`/`RenderTexture`, `Leds`, scrolling text animation).
- **Files:** `Computers.tsx`, `Scene.tsx`, `Tooltip.tsx`, `Tooltip.css`, `ZoomTransition.tsx`, `ZoomTransition.css`, `highlightsData.ts`, `index.tsx`, `monitorStore.ts.bak`
- **Replaced by:** Faithful TypeScript port of `monitors-prototype/src/Computers.jsx` and `monitors-prototype/src/App.jsx`
