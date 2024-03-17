import { MetadataRoute } from 'next';
import { readdirSync } from 'fs';

const PROTOCOL = process.env.PROTOCOL as string;
const BASE_URL = process.env.BASE_URL as string;

export function getPostRoutes(): MetadataRoute.Sitemap {
    const files = readdirSync('posts/');

    const paths = files.map((filename) => ({
        lastModified: new Date(),
        priority: 0.5,
        url: `${PROTOCOL}://${BASE_URL}/posts/${filename.replace('.mdx', '')}`,
    }));

    return paths;
}

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getPostRoutes();
    return [
        {
            changeFrequency: 'weekly',
            lastModified: new Date(),
            priority: 1,
            url: `${PROTOCOL}://${BASE_URL}`,
        },
        {
            changeFrequency: 'weekly',
            lastModified: new Date(),
            priority: 0.5,
            url: `${PROTOCOL}://${BASE_URL}/posts`,
        },
        ...posts,
    ];
}
