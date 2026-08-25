import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blogs: defineCollection({
      type: "page",
      source: "blogs/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        published_at: z.string(),
        slug: z.string(),
        external: z.boolean().optional(),
        external_url: z.string().optional(),
      }),
    }),
    talks: defineCollection({
      type: "data",
      source: "talks/**.json",
      schema: z.object({
        title: z.string(),
        instances: z.array(
          z.object({
            conference: z.string(),
            date: z.string(),
            slidesUrl: z.string(),
            youtubeUrl: z.string().optional(),
            tweetUrl: z.string().optional(),
          }),
        ),
      }),
    }),
  },
});
