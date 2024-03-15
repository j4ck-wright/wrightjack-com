import '@/styles/article.css';

import { MDXRemote } from 'next-mdx-remote/rsc';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

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

export default function Post({ params }: any) {
    const props = getPost(params);

    return (
        <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto">
            <h1>{props.frontMatter.title}</h1>

            <MDXRemote source={props.content} />
        </article>
    );
}
