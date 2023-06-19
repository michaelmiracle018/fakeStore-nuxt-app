const env = require("dotenv").config();

export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: false,
  env: env.parsed,
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "comerce-site",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    // LINK FOR FONT AWESOME
    link: [
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css",
        integrity:
          "sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==",
        crossorigin: "anonymous",
        referrerpolicy: "no-referrer",
      },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/_variables.scss", "~/assets/scss/wrapper.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~plugins/storage.plugin",
    // "~services/ApiService",
    "~plugins/services.plugin",
    "~plugins/bootstrap-icons.js",
    // "~plugins/gsap.js",
    // "~/plugins/idle-vue",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "vue-sweetalert2/nuxt",
    "@nuxtjs/axios",
    // "~/plugins/idle-vue",
    // "~plugins/storage.plugin",
  ],
  bootstrapVue: {
    icons: true,
  },

  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_BASE_URL,
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
    withCredentials: true,
  },
  publicRuntimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL,
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true,
    },
  },
};
