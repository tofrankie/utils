import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: {
    html: true,
    markdown: true,
  },
  ignores: ['dist/**', 'node_modules/**', 'coverage/**', 'pnpm-lock.yaml'],
  rules: {
    curly: 'off',
    'style/brace-style': 'off',
  },
})
