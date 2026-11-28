import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Front matter that content components read (see src/components/content). The shapes match the
// Jekyll front matter so pages can be converted without reshaping their data.
export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        giscus: z.boolean().optional(),
        gallery: z
          .array(
            z.object({
              images: z.array(
                z.object({
                  filename: z.string(),
                  alttext: z.string(),
                }),
              ),
            }),
          )
          .optional(),

        wallpapers: z
          .array(
            z.object({
              filename: z.string(),
              alttext: z.string(),
            }),
          )
          .optional(),

        chromeThemes: z
          .array(
            z.object({
              name: z.string(),
              imageUrl: z.string(),
              url: z.string(),
            }),
          )
          .optional(),
      }),
    }),
  }),
};
