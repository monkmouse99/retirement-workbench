# Developer Workflow

## Branching & PRs
- **Main Branch:** Protected. No direct commits.
- **Feature/Fix Branches:** Always branch from `main`.
- **Merge Strategy:** Squash and Merge (keeps the `main` history clean).

## Naming Standards
| Type | Prefix | Description |
| :--- | :--- | :--- |
| **Features** | `feat/` | New portfolio tracking or UI components. |
| **Bug Fixes** | `fix/` | Fixing calculation errors or API issues. |
| **Maintenance**| `chore/` | Updating dependencies (e.g., React, Node). |
| **Refactor** | `refactor/`| Improving code logic without changing UI. |

## Pre-Flight Checklist
- [ ] Logic tested against retirement calculation edge cases.
- [ ] Front-end and Back-end types stay in sync.
- [ ] Sensitive API keys/env vars are NOT committed.
