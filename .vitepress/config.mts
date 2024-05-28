import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'lhj-dosc-site',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Tools',
        items: [{ text: 'webpack', link: '/docs/tools/webpack' }]
      },
      {
        text: 'Vue',
        items: [{ text: 'vue3', link: '/docs/vue/vue3' }]
      },
      {
        text: 'React',
        items: [{ text: 'react18', link: '/docs/react/react18' }]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
