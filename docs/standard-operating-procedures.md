# Development Best Practices

## Branch Naming Convention
To ensure the git history remains searchable, use the following pattern:
`[type]/[scope]-[brief-description]`

### Scopes for Retirement App:
- `api`: Back-end / Express / Database changes.
- `ui`: Front-end components.
- `calc`: Core financial logic (compounding, tax-drag, etc.).
- `db`: Schema migrations or seed data.

**Examples:**
- `feat/ui-dashboard-chart`
- `fix/calc-inflation-adjustment`
- `chore/api-node-update`

## Pull Request Standards

Even though I am the sole reviewer, every PR should answer:

1. **What is the goal?** (e.g., "Add 401k contribution projections")
2. **How was it tested?** (e.g., "Manual verification of 7% CAGR math")
3. **Impact?** Does this change the database schema?

## Code Quality Notes

- **DRY Logic:** Keep financial calculation logic in the `/shared` or `/utils` folder to ensure both Front-end and Back-end use the same math.
- **Commits:** Use imperative mood in commit messages ("Add feature" instead of "Added feature").