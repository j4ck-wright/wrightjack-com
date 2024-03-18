import '@/styles/article.css';

import ArticleHeader from '@/components/ArticleComponents/ArticleHeader';
import DualImage from '@/components/ArticleComponents/DualImage';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { Metadata } from 'next';
import SingleImageStretch from '@/components/ArticleComponents/SingleImageStretch';
import { getPostBySlug } from '@/PostHandler';
import { notFound } from 'next/navigation';
import { readdirSync } from 'fs';
import rehypePrettyCode from 'rehype-pretty-code';

const rehypePrettyCodeOptions = {
    theme: 'ayu-dark',
};

const options = {
    mdxOptions: {
        rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]] as any[],
        remarkPlugins: [],
    },
};

export function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Metadata {
    const data = getPostBySlug(params.slug);

    const { metadata } = data;

    return {
        authors: { name: metadata.author },
        description: metadata.description,
        keywords: metadata.categories,
        title: metadata.title,
    };
}

export async function generateStaticParams() {
    const files = readdirSync('posts/');

    const paths = files.map((filename) => ({
        slug: filename.replace('.mdx', ''),
    }));

    return paths;
}

export default function Post({ params }: { params: { slug: string } }) {
    const data = getPostBySlug(params.slug);

    const { metadata, content } = data;

    if (!metadata.title) {
        notFound();
    }

    return (
        <article className="px-4 xl:px-0">
            <ArticleHeader
                author={{
                    imageSrc: `/post-assets/authors/${metadata.author}.jpeg`,
                    name: metadata.author,
                }}
                date={metadata.date}
                timeToRead={metadata.minutes_to_read}
                title={metadata.title}
                categories={metadata.categories}
            />

            <MDXRemote
                source={content}
                options={options}
                components={{ DualImage, SingleImageStretch }}
            />
        </article>
    );
}
