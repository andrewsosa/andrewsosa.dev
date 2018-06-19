module.exports = {
  /*
  **  Headers of the page
  */
  head: {
    title: 'homepage',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js edition of Andrew Sosa&apos;s homepage' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  **  Load custom style library, this makes all bulma sass classess available
  **  to the templating.
  */
  css: [
    // node.js module but we specify the pre-processor
    { src: 'bulma/bulma.sass', lang: 'sass' },
    '@fortawesome/fontawesome/styles.css',
  ],

  /*
  **  External modules
  */
  modules: [
    ['nuxt-sass-resources-loader', 'bulma/sass/utilities/_all.sass'], // bulma vars for sass
  ],

  plugins: [
    { src: '~/plugins/font-awesome' }
  ],

  module: {
    rules: [
      { test: /\.ya?ml$/, use: 'js-yaml-loader' }
    ]
  },

  /*
  **  Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    },
    /*
    **  Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
