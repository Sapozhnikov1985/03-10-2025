import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
    collections: {
        articles: defineCollection({
            type: "page",
            source: "articles/**.md",
            schema: z.object({
                cover: z.string(),
            }),
        }),
        videos: defineCollection({
            type: "data",
            source: "videos/**.yml",
            schema: z.object({
                name: z.string(),
                vid: z.string(),
            }),
        }),
    },
});
