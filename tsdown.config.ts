import path from 'node:path'
import { glob } from 'glob'
import { defineConfig } from 'tsdown'

const sourceFiles = glob.sync('src/**/*.ts', {
  ignore: ['src/**/*.test.ts', 'src/**/*.spec.ts', 'src/index.ts'],
})

const entry = {
  index: 'src/index.ts',
}

sourceFiles.forEach(file => {
  const relativePath = path.relative('src', file)
  const name = relativePath.replace('.ts', '').replace(/\//g, '-')

  if (name.includes('-index')) {
    const category = name.replace('-index', '')
    entry[category] = file
  }
  else {
    entry[name] = file
  }
})

export default defineConfig({
  entry,
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  minify: false,
  target: 'es2022',
  outDir: 'dist',
  outputOptions: {
    entryFileNames: '[name].js',
    chunkFileNames: '[name].js',
    assetFileNames: '[name].[ext]',
  },
})
