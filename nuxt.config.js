require('dotenv').config()
const path = require('path')

export default {
  mode:'universal',
  srcDir: 'src/',
  modulesDir: path.resolve(__dirname, 'node_modules'),



  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_ACCESS_TOKEN: process.env.CTF_ACCESS_TOKEN,
  },
  /*
  ** Headers of the page
  */

  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
      lang: 'en'
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"}
    ]
  },
  extensions: ['ts', 'js'],

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/reset.css','~/assets/css/prism.css'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-lazyload', ssr: false },
  ],
  markdownit: {
    injected: true,
    html: true,
    linkify: true,
    typography: true,
  },
  generate: {
    async routes() {
      const contentful = require("./plugins/contentful")
      const client =  contentful({
        space: process.env.CTF_SPACE_ID,
        accessToken: process.env.CTF_CDA_ACCESS_TOKEN
      })
      const posts = await client.getEntries({
        content_type: 'post',
      })
      return posts.items.map(item => `posts/${item.fields.slug}`)

    }
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
  ],

  /*
  ** Build configuration
  */

  babel: {
    presets: [['@babel/env', { modules: 'commonjs' }]],
    plugins: [
      'babel-plugin-vue-jsx-modifier',
      'babel-plugin-transform-vue-jsx',
      [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-syntax-dynamic-import',
        {
          regenerator: true
        }
      ]
    ]
  },


  build: {


    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      //extendConfig(config)
    }
  },
  buildModules: ['@nuxt/typescript-build']


}
