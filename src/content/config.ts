import { defineCollection } from "astro:content";
import { blogPostSchema } from "../schemas/BlogPost";

const blogCollection = defineCollection({ schema: blogPostSchema });

export const collections = {
  'blog': blogCollection,
};