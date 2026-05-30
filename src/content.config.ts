import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const seriesSchema = z.object({
  name: z.string(),
  slug: z.string(),
  part: z.number(),
  totalParts: z.number(),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('La redacción'),
    tags: z.array(z.string()).default([]),
    series: seriesSchema.optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
