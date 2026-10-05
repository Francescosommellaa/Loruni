# Loruni

Vite + React + TypeScript base for the faithful conversion of the Loruni Framer project. This first slice includes dependencies, migration skills and source inventory. The site pages are not implemented yet.

Requires Node >=24.13.1 and pnpm 11.24.0.

```powershell
pnpm install --frozen-lockfile
pnpm dev
pnpm test
pnpm lint
pnpm typecheck
pnpm build
```

Open http://127.0.0.1:5173 during development. `pnpm preview` serves the production build locally. The bootstrap is noindex and has no deployment configuration.

- [Source inventory](docs/framer/INVENTORY.md)
- [Capture instructions](docs/framer/README.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Animation ownership](docs/MOTION.md)
- [Verification](docs/BOOTSTRAP-VERIFICATION.md)

Project skills: `.agents/skills/loruni-framer-inventory`, `loruni-react-port`, `loruni-motion-ownership`. They are discoverable project skills; already-running chats may need a restart or explicit path to refresh the skill catalog.

Pre-existing `Logo/` deletions are preserved. The former Next.js runtime is not present in this checkout and has not been restored.
