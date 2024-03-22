import path from 'path'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt2-tem',
    htmlAttrs: {
      lang: 'zh-cn'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  server: {
    port: '3030', // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/base.css','element-ui/lib/theme-chalk/index.css'],
  router: {
    middleware: ['router', 'auth']
  },
  serverMiddleware: [
    '@/serverMiddleware/index'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/element-ui', '@/plugins/mobile.client', '@/plugins/custom-register', '@/plugins/custom-axios'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    extend (config) {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      svgRule.exclude = [path.join(__dirname, 'assets/svg')]
      config.module.rules.push({
        test: /\.svg$/,
        include: [path.join(__dirname, 'assets/svg')],
        use: [{
          loader: 'svg-sprite-loader',
          options: { symbolId: 'icon-[name]' }
        }]
      })
    }
  }
}
