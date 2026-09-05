## Stack

- Next.js with App Router, TypeScript, and Tailwind CSS.
- Vitest + React Testing Library for unit and component tests.
- Playwright for end-to-end flows.
- Follow the versions and conventions already used in the project.

## Code

- Keep components and functions small and single-purpose.
- Keep files under 500 lines; split them by responsibility.
- Use specific names. Avoid `data`, `utils`, `handler`, and `Manager`.
- Do not use `any`, `@ts-ignore`, or duplicated code.
- Prefer early returns over nested conditionals.
- Do not add dependencies without a clear need.

## Next.js

- Use Server Components by default.
- Add `"use client"` only for state, effects, events, or browser APIs.
- Use `next/link`, `next/image`, and the Metadata API.
- Validate data, authentication, and authorization on the server.
- Never expose secrets; only public values may use `NEXT_PUBLIC_`.
- Handle loading, error, empty, and not-found states when applicable.

## Tailwind CSS

- Use Tailwind by default; avoid inline styles and extra CSS files.
- Reuse existing tokens and components.
- Avoid arbitrary values when an equivalent token exists.
- Use a mobile-first approach and preserve dark mode when available.
- Do not construct Tailwind class names through dynamic interpolation.

## Accessibility

- Prefer semantic HTML over ARIA.
- Forms must have accessible labels and errors.
- Every interaction must work with a keyboard.
- Preserve visible focus, sufficient contrast, and accessible names.
- Buttons perform actions; links provide navigation.

## Tests

- Run tests using the commands defined in `package.json`.
- Every bug fix must include a regression test.
- New logic must test its main and error behaviors.
- Test public behavior, not implementation details.
- Prefer `getByRole` and `getByLabel`; use `data-testid` only as a last resort.
- Avoid large snapshots and fixed delays.
- Mock only external boundaries.
- Use Playwright for critical user journeys, not unit-level logic.

## Quality

- Use the formatter, linter, and type checker configured in the project.
- Do not suppress errors to make CI pass.
- Remove debug logs, dead code, and temporary comments.
- Do not modify files outside the task scope.
- On completion, report changes, tests run, and any limitations.
