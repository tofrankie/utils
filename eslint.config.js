import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  jsonc: true,
  markdown: true,
  ignores: [
    'dist/**',
    'node_modules/**',
    'docs/**',
    'examples/**',
    '*.config.js',
    'pnpm-lock.yaml',
    'plan.md',
    'task.md',
    'tsconfig.json',
  ],
  rules: {
    'style/arrow-parens': ['error', 'as-needed'],
  },
})
