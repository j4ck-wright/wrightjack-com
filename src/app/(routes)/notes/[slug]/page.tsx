import '@/styles/article.css';

import ArticleHeader from '@/components/ArticleComponents/ArticleHeader';
import { MDXRemote } from 'next-mdx-remote/rsc';
import SingleImageStretch from '@/components/ArticleComponents/SingleImageStretch';
import { getPostBySlug } from '@/PostHandler';
import { notFound } from 'next/navigation';
import rehypePrettyCode from 'rehype-pretty-code';

const rehypePrettyCodeOptions = {
    theme: 'one-dark-pro',
};

const options = {
    mdxOptions: {
        rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]] as any[],
        remarkPlugins: [],
    },
};

export default function Post({ params }: { params: { slug: string } }) {
    const data = getPostBySlug(params.slug);

    const { metadata, content } = data;

    if (!metadata.title) {
        notFound();
    }

    return (
        <article>
            <ArticleHeader
                author={{
                    imageSrc: `/post-assets/authors/${metadata.author}.jpeg`,
                    name: metadata.author,
                }}
                date={metadata.date}
                timeToRead={metadata.minutes_to_read}
                title={metadata.title}
            />

            <MDXRemote
                source={content}
                options={options}
                components={{ SingleImageStretch }}
            />
        </article>
    );
}
