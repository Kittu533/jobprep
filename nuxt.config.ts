export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: [
    '@nuxt/ui',
    'v-gsap-nuxt',
    '@hypernym/nuxt-gsap',
    '@pinia/nuxt'
  ],
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL
    }
  },
  css: ['~/assets/css/main.css'],
  ui: {
    colorMode: false
  },
  gsap: {
    extraPlugins: {
      // Optional: Add any GSAP plugins you want to use
      scrollTrigger: true
    }
  },
  devtools: { enabled: true }
})