import { MetadataRoute } from 'next';

const PROTOCOL = process.env.PROTOCOL as string;
const BASE_URL = process.env.BASE_URL as string;

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            allow: '/',
            userAgent: '*',
        },
        sitemap: `${PROTOCOL}://${BASE_URL}/sitemap.xml`,
    };
}
