import '@/app/article.css';

import { Post } from '@/types/post';
import { PostHandler } from '@/PostHandler';
import { compileMDX } from 'next-mdx-remote/rsc';

export default async function page({ params }: { params: { slug: string } }) {
    const post = new PostHandler(params.slug);
    const { content, frontmatter } = await compileMDX<Partial<Post.Metadata>>({
        options: { parseFrontmatter: true },
        source: post.getContent(),
    });
    return (
        <article>
            <h1>{frontmatter.title}</h1>
            {content}
        </article>
    );
}
