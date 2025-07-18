export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxt/ui', 'v-gsap-nuxt', '@hypernym/nuxt-gsap'],
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