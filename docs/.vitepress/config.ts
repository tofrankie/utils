import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'JavaScript Utils',
  description: '现代化的 JavaScript 工具函数库',
  base: '/utils/',
  ignoreDeadLinks: true,

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
    lineNumbers: false,
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'JavaScript Utils',
      description: '现代化的 JavaScript 工具函数库',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '指南', link: '/guide/' },
          { text: 'API', link: '/api/' },
          { text: 'Playground', link: '/playground/' },
          {
            text: '更多',
            items: [
              { text: 'GitHub', link: 'https://github.com/toFrankie/utils' },
              { text: 'NPM', link: 'https://www.npmjs.com/package/@tofrankie/utils' },
              { text: '贡献指南', link: '/guide/contributing' },
            ],
          },
        ],
        sidebar: {
          '/guide/': [
            {
              text: '指南',
              items: [
                { text: '介绍', link: '/guide/' },
                { text: '快速开始', link: '/guide/getting-started' },
                { text: '函数概览', link: '/guide/functions' },
                { text: '使用示例', link: '/guide/examples' },
                { text: '性能报告', link: '/guide/performance' },
                { text: '安装', link: '/guide/installation' },
                { text: '贡献指南', link: '/guide/contributing' },
              ],
            },
          ],
          '/api/': [
            {
              text: 'API 参考',
              items: [
                { text: '函数工具', link: '/api/functions' },
                { text: '数组工具', link: '/api/array' },
                { text: '对象工具', link: '/api/object' },
                { text: '字符串工具', link: '/api/string' },
                { text: '验证工具', link: '/api/validation' },
              ],
            },
          ],
        },
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'JavaScript Utils',
      description: 'Modern JavaScript utility library',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guide/' },
          { text: 'API', link: '/en/api/' },
          { text: 'Playground', link: '/en/playground/' },
          {
            text: 'More',
            items: [
              { text: 'GitHub', link: 'https://github.com/toFrankie/utils' },
              { text: 'NPM', link: 'https://www.npmjs.com/package/@tofrankie/utils' },
              { text: 'Contributing', link: '/en/guide/contributing' },
            ],
          },
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Guide',
              items: [
                { text: 'Introduction', link: '/en/guide/' },
                { text: 'Getting Started', link: '/en/guide/getting-started' },
                { text: 'Functions Overview', link: '/en/guide/functions' },
                { text: 'Examples', link: '/en/guide/examples' },
                { text: 'Performance', link: '/en/guide/performance' },
                { text: 'Installation', link: '/en/guide/installation' },
                { text: 'Contributing', link: '/en/guide/contributing' },
              ],
            },
          ],
          '/en/api/': [
            {
              text: 'API Reference',
              items: [
                { text: 'Function Utils', link: '/en/api/functions' },
                { text: 'Array Utils', link: '/en/api/array' },
                { text: 'Object Utils', link: '/en/api/object' },
                { text: 'String Utils', link: '/en/api/string' },
                { text: 'Validation Utils', link: '/en/api/validation' },
              ],
            },
          ],
        },

        editLink: {
          pattern: 'https://github.com/toFrankie/utils/edit/main/docs/:path',
          text: 'Edit this page on GitHub',
        },

        lastUpdated: {
          text: 'Last updated',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium',
          },
        },
      },
    },
  },

  themeConfig: {
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/toFrankie/utils' },
      { icon: 'twitter', link: 'https://twitter.com/toFrankie' },
    ],

    editLink: {
      pattern: 'https://github.com/toFrankie/utils/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2024 JavaScript Utils',
    },
  },
})
