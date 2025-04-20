// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    modules: [
        "@nuxtjs/tailwindcss",
        "shadcn-nuxt",
        "@nuxtjs/color-mode",
        "@nuxt/icon",
        "@nuxt/content",
        "nuxt-aos",
    ],
    css: ["@/assets/css/tailwind.css", "@/assets/css/global.scss"],
    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: "",
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: "./components/ui",
    },
    colorMode: {
        classSuffix: "",
    },

    content: {
        preview: {
            api: "https://api.nuxt.studio",
        },
    },
    app: {
        pageTransition: {
            name: "page",
            mode: "out-in",
        },
    },
});
