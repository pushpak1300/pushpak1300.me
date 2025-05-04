import { defineCollection, defineContentConfig, z } from '@nuxt/content'

// Define blogs collection using Markdown files
const blogs = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published_at: z.string(),
    slug: z.string(),
    external: z.boolean().optional(),
    external_url: z.string().optional()
  })
})

// Define projects collection using JSON files
const projects = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    slug: z.string(),
    projectLink: z.union([z.string(), z.boolean()]).optional(),
    mainLink: z.string(),
    skills: z.string(),
    githubUrl: z.string()
  })
})

// Define talks collection using a single JSON file
const talks = defineCollection({
  type: 'data',
  schema: z.object({
    talks: z.array(z.object({
      title: z.string(),
      conference: z.string(),
      date: z.string(),
      slidesUrl: z.string().optional(),
      youtubeUrl: z.string().optional(),
      tweetUrl: z.string().optional()
    })).optional()
  })
})

export default defineContentConfig({
  collections: {
    blogs,
    projects,
    talks
  },
});
