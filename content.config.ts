import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
    collections: {
        content: defineCollection({
            type: "page",
            source: "**/*.md",
            schema: z.object({
                cover: z.string(),
            }),
        }),
        videos: defineCollection({
            type: "data",
            source: "videos/**/*.json",
            schema: z.object({
                name: z.string(),
                id: z.number(),
            }),
        }),
    },
});
