import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'lhj-dosc-site',
  description: '前端技术文档',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tools', link: '/docs/tools/webpack' },
      { text: 'Vue3', link: '/docs/vue/vue3' },
      { text: 'React18', link: '/docs/react/react18' }
    ],

    sidebar: [
      {
        text: 'Tools',
        items: [{ text: 'Webpack', link: '/docs/tools/webpack' }]
      },
      {
        text: 'Vue',
        items: [{ text: 'Vue3', link: '/docs/vue/vue3' }]
      },
      {
        text: 'React',
        items: [{ text: 'React18', link: '/docs/react/react18' }]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
