import path from 'path'
import colors from 'vuetify/es5/util/colors'

import { BRAND_DESCRIPTION, BRAND_NAME, BRAND_URL } from './config/brand'
import { getServicesStatic, getPlacesStatic } from './core/getContent'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  publicRuntimeConfig: {
    BRAND_NAME,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: `%s - ${BRAND_NAME} - Expertos en impermeabilización de cubiertas y terrazas.`,
    title: BRAND_NAME,
    description: BRAND_DESCRIPTION,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: BRAND_DESCRIPTION },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // https://image.nuxtjs.org/
    [
      '@nuxt/image',
      {
        sharp: {
          withMetadata: true,
        },
      },
    ],
  ],

  styleResources: {
    scss: ['~/assets/scss/_config/_main.scss'],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    hostname: BRAND_URL,
    gzip: true,
    exclude: ['/gracias', '/tutorial'],
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/scss/_config/_vuetify_variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.grey.darken4,
          secondary: colors.indigo.darken3,
          accent: colors.cyan.accent3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.node = {
        fs: 'empty',
      }
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }

      // import md files
      config.module.rules.push({
        test: /.md$/,
        use: [
          {
            loader: path.resolve(__dirname, './core/md-loader.js'),
          },
        ],
      })
    },
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ],
    },
  },

  generate: {
    fallback: true,
    routes: [...getServicesStatic(), ...getPlacesStatic()],
  },
}
