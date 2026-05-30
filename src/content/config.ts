import { defineCollection, z } from "astro:content";

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  summary: z.string(),
  date: z.string(),
  tags: z.array(z.string()).default([]),
  image: z.string().optional(),
  order: z.number().default(99)
});

export const collections = {
  research: defineCollection({ type: "content", schema: baseSchema }),
  projects: defineCollection({ type: "content", schema: baseSchema }),
  notes: defineCollection({ type: "content", schema: baseSchema.extend({
    question: z.string(),
    evidence: z.string().optional()
  }) })
};
