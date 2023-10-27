import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import * as translate from '@/content/i18n/en-us.json';

const i18nCollection = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        translations: z.object(
            (Object.keys(translate.translations) as (keyof typeof translate.translations)[]).reduce(
                (acc, key) => ({ ...acc, [key]: z.string() }),
                {}
            ) as {
                [key in keyof typeof translate.translations]: z.ZodString;
            }
        ),
        pages: z.object(
            (Object.keys(translate.pages) as (keyof typeof translate.pages)[]).reduce(
                (acc, key) => ({
                    ...acc,
                    [key]: z.object({
                        title: z.string(),
                        description: z.string()
                    })
                }),
                {}
            ) as { [key in keyof typeof translate.pages]: z.ZodObject<{ title: z.ZodString; description: z.ZodString }> }
        )
    })
});

export const collections = {
    i18n: i18nCollection
};
