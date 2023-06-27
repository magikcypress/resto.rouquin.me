import { chartPlugin } from  'vuepress-plugin-chart'
import { path } from '@vuepress/utils'
import { defaultTheme } from 'vuepress'
import * as dotenv from 'dotenv'

dotenv.config()

export default {
  /**
   * Ref：https://v2.vuepress.vuejs.org/guide/configuration.html
   */
  title: 'Les restaurants Parisiens',
  /**
   * Ref：https://v2.vuepress.vuejs.org/guide/configuration.html
   */
  description: 'Les restaurants Parisiens - Eating',
  /**
   * Ref：https://npmmirror.com/package/vuepress-plugin-ipfs
   */
   //base: 'ipns/_ipfs2.rouquin.me/',
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v2.vuepress.vuejs.org/guide/configuration.html
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
    ['meta', { name: "robots", content: "noindex,nofollow"}],
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/favicons/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/favicons/site.webmanifest"}],
    ['link', { rel: "manifest", href: "/favicons/site.webmanifest"}],
    ['link', { rel: "icon", type: "image/x-icon", href: "/favicons/favicon.ico"}],
    // Not clean
    ['link', { rel: "stylesheet", href: "https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"}],
    ['script', { src: "https://jasper-shrimp.pikapod.net/script.js", 'data-website-id': "ee5f4666-371f-422b-8972-995e4323d4e5", async: true }]
  ],

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'Français', // this will be set as the lang attribute on <html>
      title: 'Les restaurants Parisiens',
      description: 'Passion, Manger, Eating, Bonne Franquette'
    }
  },

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v2.vuepress.vuejs.org/guide/theme.html
   */
  theme: defaultTheme({
    locales: {
      '/': {
        selectLanguageName: 'English',

        sidebar: false,
        repo: 'https://github.com/magikcypress/resto.rouquin.me/',
        editLink: true,
        docsDir: 'docs/',
        editLinkText: 'Edit on Github',
        lastUpdated: true,
        contributors: true
      }
    }
  }), 
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    chartPlugin(),
    'copyright', 
    {
        // texts will be unselectable
        noSelect: true,
        noCopy: true
    },
    'register-components',
    {
      components: {
        componentsDir: path.resolve(__dirname, './components'),
      },
    }
  ],

  build: {
    rollupOptions: {
      external: [
        '@vue-leaflet/vue-leaflet',
        'leaflet',
      ]
    }
  },

  define: {
    chatid: process.env.CHATID,
    botkey: process.env.BOTKEY,
  },
}