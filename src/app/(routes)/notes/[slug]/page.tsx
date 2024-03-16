import '@/styles/article.css';

import ImageStretch from '@/components/ImageStretch';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug } from '@/PostHandler';
import rehypePrettyCode from 'rehype-pretty-code';

const rehypePrettyCodeOptions = {
    theme: 'nord',
};

const options = {
    mdxOptions: {
        rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]] as any[],
        remarkPlugins: [],
    },
};

export default function Post({ params }: { params: { slug: string } }) {
    const data = getPostBySlug(params.slug);
    if (!data) {
        return <h1>oh no!</h1>;
    }

    const { metadata, content } = data;

    return (
        <article>
            <h1>{metadata.title}</h1>

            <MDXRemote
                source={content}
                options={options}
                components={{ ImageStretch }}
            />
        </article>
    );
}
