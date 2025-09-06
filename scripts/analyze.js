#!/usr/bin/env node

import { readdir, readFile, stat } from 'node:fs/promises'
import path from 'node:path'

main()

async function main() {
  console.log('📊 包体积分析\n')

  // 分析主入口文件
  console.log('📦 主入口文件:')
  const mainFiles = ['dist/index.js', 'dist/index.d.ts']

  const mainAnalyses = await Promise.all(mainFiles.map(analyzeFile))
  mainFiles.forEach((file, index) => {
    const analysis = mainAnalyses[index]
    if (analysis) {
      const fileName = file.replace('dist/', '')
      console.log(
        `  ${fileName.padEnd(35)} ${formatBytes(analysis.size).padStart(8)} │ gzip: ${formatBytes(analysis.gzipped)} │ lines: ${analysis.lines}`,
      )
    }
  })

  console.log('\n📦 单函数模块（根目录）:')
  const functionFiles = await getDistFiles()

  if (functionFiles.length === 0) {
    console.log('  ⚠️  未找到构建文件，请先运行 pnpm build')
  }
  else {
    const functionAnalyses = await Promise.all(functionFiles.map(analyzeFile))
    functionFiles.forEach((file, index) => {
      const analysis = functionAnalyses[index]
      if (analysis) {
        const fileName = file.replace('dist/', '')
        console.log(
          `  ${fileName.padEnd(35)} ${formatBytes(analysis.size).padStart(8)} │ gzip: ${formatBytes(analysis.gzipped)}`,
        )
      }
    })
  }

  // 计算总大小
  console.log('\n📈 总体统计:')
  const allFiles = [...mainFiles, ...functionFiles]
  const allAnalyses = await Promise.all(allFiles.map(analyzeFile))

  let totalSize = 0
  let totalGzipped = 0
  allAnalyses.forEach(analysis => {
    if (analysis) {
      totalSize += analysis.size
      totalGzipped += analysis.gzipped
    }
  })

  console.log(`  总大小: ${formatBytes(totalSize)}`)
  console.log(`  总预估 gzip: ${formatBytes(totalGzipped)}`)
  console.log(`  📦 可用模块数量: ${functionFiles.filter(f => f.endsWith('.js')).length} 个`)
}

async function analyzeFile(filePath) {
  try {
    const stats = await stat(filePath)
    const content = await readFile(filePath, 'utf8')

    return {
      size: stats.size,
      gzipped: estimateGzipSize(content),
      lines: content.split('\n').length,
    }
  }
  catch {
    return null
  }
}

async function getDistFiles() {
  try {
    const distDir = 'dist'
    const files = await readdir(distDir)

    // 过滤出 .js 和 .d.ts 文件，排除 index 文件
    const filteredFiles = []

    for (const file of files) {
      const isJsFile = file.endsWith('.js')
      const isDtsFile = file.endsWith('.d.ts')
      const isNotIndex = !file.startsWith('index')
      const isNotMap = !file.endsWith('.map')

      if ((isJsFile || isDtsFile) && isNotIndex && isNotMap) {
        const filePath = path.join(distDir, file)
        const stats = await stat(filePath)
        const isNotEmpty = stats.size > 0

        if (isNotEmpty) {
          filteredFiles.push(filePath)
        }
      }
    }

    return filteredFiles.sort()
  }
  catch {
    return []
  }
}

function formatBytes(bytes) {
  if (bytes === 0)
    return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${Number.parseFloat((bytes / k ** i).toFixed(2))} ${sizes[i]}`
}

function estimateGzipSize(content) {
  // 简单的 gzip 大小估算（实际压缩率约为 30-40%）
  return Math.round(content.length * 0.35)
}
