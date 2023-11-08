const { defineConfig } = require('remarkable-docs')

module.exports = defineConfig({
  docsDir: './src/docs',
  outDir: './src/.docs-generated',
  format: 'tsx',
  emptyOutDir: true,
  logLevel: 'info',
  extension: '.md',
  collectCommit: true,
  collectCommitTime: true,
  collectCommitHash: false,
  collectCommitAuthorName: false,
  collectCommitAuthorEmail: false,
  collectCommitInWatchMode: false,
  mockCommitInWatchMode: true,
  ui: {
    debug: false,
    colorScheme: 'auto',
    docPageTitleFormat: '{docTitle}',
    previewTitleFormat: 'Preview: {previewTitle} | {docTitle}',
    miniToc: false,
    docFooterVisibility: 'visible',
    docMetaVisibility: 'visible',
    tocLevel: ['h2'],
    permalink: {
      host: '',
      home: '',
      contextPath: '/docs',
      exact: false,
      enforceTrailingSlash: true,
      preferShortUrlForMainLanguage: true
    },
    languages: [
      {
        code: 'en-US',
        name: 'English (US)',
        headerLinks: []
      },
      {
        code: 'zh-CN',
        name: '中文（简体）',
        headerLinks: [],
        docPageTitleFormat: '{docTitle}',
        previewTitleFormat: '预览：{previewTitle} | {docTitle}',
        messages: {
          'doc.nav.prev': 'Previous',
          'doc.nav.next': 'Next',
          'toc.heading': '文章目录',
          'search.placeholder': '搜索文档',
          'search.empty': '未找到与“{keyword}”相关的结果',
          'not.translated': '本文暂未翻译为{language}，当前语言为：{current}。',
          'color.scheme.theme': '主题',
          'color.scheme.os': '跟随系统',
          'color.scheme.light': '浅色',
          'color.scheme.dark': '深色',
          'props.renderer.name': '名称',
          'props.renderer.type': '类型',
          'props.renderer.desc': '描述',
          'props.renderer.default': '默认值'
        }
      }
    ]
  }
})
