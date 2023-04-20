import { z } from "astro:content";

export const blogPostSchema = z.object({
  title: z.string(),
  date: z.string(),
  description: z.string().optional(),
  author: z.string(),
  image: z.object({
    src: z.string(),
    alt: z.string(),
  }),
  tags: z.array(z.string()).optional(),
})

export type BlogPost = z.infer<typeof blogPostSchema>