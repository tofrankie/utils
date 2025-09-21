# Contributing

Thank you for your interest in the JavaScript Utils project! We welcome contributions in various forms.

## 🚀 Quick Start

### Requirements

- Node.js >= 22.0.0
- pnpm >= 8.0.0

### Local Development

```bash
# Clone the project
git clone https://github.com/tofrankie/utils.git
cd utils

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run tests
pnpm test

# Build project
pnpm build
```

## 📝 Ways to Contribute

### 1. Report Issues

If you find bugs or have feature suggestions, please:

1. Check [Issues](https://github.com/tofrankie/utils/issues) to see if it already exists
2. Create a new Issue with detailed description of the problem or suggestion
3. Provide reproduction steps (if it's a bug)

### 2. Submit Code

1. Fork the project to your GitHub account
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit changes: `git commit -m 'feat: add your feature'`
4. Push branch: `git push origin feature/your-feature-name`
5. Create a Pull Request

### 3. Write Documentation

- Update README.md
- Add or update API documentation
- Write usage examples
- Improve existing documentation

## 🛠️ Development Standards

### Code Standards

The project uses the following tools to ensure code quality:

- **ESLint** - Code style checking
- **Prettier** - Code formatting
- **TypeScript** - Type checking
- **Vitest** - Unit testing

### Commit Message Standards

Use [Conventional Commits](https://www.conventionalcommits.org/) standard:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Common types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation update
- `style`: Code formatting
- `refactor`: Code refactoring
- `test`: Test related
- `chore`: Build process or auxiliary tool changes

### Testing Requirements

- New features must include test cases
- Test coverage should not be lower than current level
- All tests must pass

### File Naming Standards

- Use `kebab-case` naming: `my-function.ts`
- Special function names keep original meaning: `convert2pinyin`
- Test file suffix: `*.test.ts`
- Example file suffix: `*-demo.html`

## 📦 Adding New Functions

### 1. Create Function File

Create function file in the appropriate category directory:

```typescript
// src/array/my-function.ts
/**
 * Function description
 * 
 * @param param1 Parameter 1 description
 * @param param2 Parameter 2 description
 * @returns Return value description
 * 
 * @example
 * ```ts
 * const result = myFunction(param1, param2)
 * console.log(result)
 * ```
 */
export function myFunction(param1: string, param2: number): boolean {
  // Implementation code
  return true
}
```

### 2. Update Index File

Export new function in the corresponding `index.ts`:

```typescript
// src/array/index.ts
export * from './my-function'
```

### 3. Add Tests

Create test file:

```typescript
// test/array/my-function.test.ts
import { describe, it, expect } from 'vitest'
import { myFunction } from '../../src/array/my-function'

describe('myFunction', () => {
  it('should work correctly', () => {
    expect(myFunction('test', 123)).toBe(true)
  })
})
```

### 4. Update Documentation

- Run `pnpm docs:api` to generate API documentation
- Add usage examples in `docs/guide/examples.md`
- Update function list in `docs/guide/functions.md`

## 🔍 Code Review

### Pull Request Checklist

- [ ] Code follows project standards
- [ ] All tests pass
- [ ] Added necessary test cases
- [ ] Updated relevant documentation
- [ ] Commit messages follow standards
- [ ] No breaking changes

### Review Focus

1. **Function Correctness** - Does the function work as expected
2. **Performance Considerations** - Are there any performance issues
3. **Type Safety** - Are TypeScript types correct
4. **Test Coverage** - Is there sufficient testing
5. **Documentation Completeness** - Is there clear documentation and examples

## 📚 Resources

- [Project Documentation](https://tofrankie.github.io/utils/)
- [API Reference](https://tofrankie.github.io/utils/api/)
- [Online Demo](https://tofrankie.github.io/utils/playground/)
- [GitHub Issues](https://github.com/tofrankie/utils/issues)

## 💬 Community

- Discuss in [GitHub Discussions](https://github.com/tofrankie/utils/discussions)
- Follow project updates and announcements

Thank you for your contribution! 🎉
