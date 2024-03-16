import '@/styles/article.css';

import { MDXRemote } from 'next-mdx-remote/rsc';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
    const files = fs.readdirSync(path.join('posts/'));

    const paths = files.map((filename) => ({
        slug: filename.replace('.mdx', ''),
    }));

    return paths;
}

function getPost({ slug }: { slug: string }) {
    const markdownFile = fs.readFileSync(`posts/${slug}/body.mdx`, 'utf-8');

    const { data: frontMatter, content } = matter(markdownFile);

    return {
        content,
        frontMatter,
        slug,
    };
}

const rehypePrettyCodeOptions = {
    theme: 'nord',
};

const options = {
    mdxOptions: {
        rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
        remarkPlugins: [remarkGfm],
    },
};

export default function Post({ params }: any) {
    const props = getPost(params);

    return (
        <article>
            <h1>{props.frontMatter.title}</h1>

            <MDXRemote
                source={props.content}
                options={options}
                components={{ ImageStretch }}
            />
        </article>
    );
}
