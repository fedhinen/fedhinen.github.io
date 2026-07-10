import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
        tags: z.array(z.string()).optional(),
        project: z.string().optional(),
        lang: z.enum(['es', 'en']).default('es'),
	}),
});

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        link: z.string().optional(),
        repo: z.string().optional(),
        date: z.coerce.date(),
        lang: z.enum(['es', 'en']).default('es'),
    })
});

const certifications = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        issuer: z.string(),
        image: z.string(),
        url: z.string().url().optional(),
        date: z.coerce.date(),
        featured: z.boolean().default(true),
    })
});

export const collections = { blog, projects, certifications };
