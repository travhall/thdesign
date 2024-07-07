import { z, defineCollection } from "astro:content";
const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        author: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
        roles: z.array(z.string()),
        tags: z.array(z.string()),
        tech: z.array(z.string()),
        status: z.string(),
        isPublic: z.boolean()
    })
});

export const collections = {
    projects: projectsCollection,
};