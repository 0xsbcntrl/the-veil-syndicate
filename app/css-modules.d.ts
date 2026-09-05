// Plain CSS side-effect imports (e.g. `import './globals.css'`) resolve at
// bundler level. Next's own types cover `*.module.css`; this covers the
// global stylesheet import so type-aware linting (oxlint typeCheck) passes.
declare module '*.css';