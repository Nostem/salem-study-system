import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const wiki = defineCollection({
  loader: glob({ pattern: '**/*.md', base: '../wiki' }),
  schema: z.object({
    title: z.string().optional(),
    category: z.string().optional(),
    status: z.enum(['draft', 'verified', 'outdated', 'edited']).optional().default('draft'),
    reference: z.enum(['yes', 'no']).optional(),
    aliases: z.array(z.string()).optional().default([]),
  }),
});

export const collections = { wiki };
