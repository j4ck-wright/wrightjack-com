import '@/app/article.css';

import { Post } from '@/types/post';
import { compileMDX } from 'next-mdx-remote/rsc';
import { readFileSync } from 'fs';

export default async function page({ params }: { params: { slug: string } }) {
    const postContent = readFileSync(`posts/${params.slug}/body.mdx`, 'utf-8');

    const { content, frontmatter } = await compileMDX<Partial<Post.Metadata>>({
        options: { parseFrontmatter: true },
        source: postContent,
    });

    return (
        <article>
            <h1>{frontmatter.title}</h1>
            {content}
        </article>
    );
}
