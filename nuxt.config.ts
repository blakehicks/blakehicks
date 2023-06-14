// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/sanity", "@nuxtjs/tailwindcss", "@hypernym/nuxt-gsap"],
  devtools: { enabled: true },
  sanity: {
    projectId: "sa88dseu",
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
});
