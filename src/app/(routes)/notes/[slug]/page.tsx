import '@/app/article.css';

import { MDXRemote } from 'next-mdx-remote/rsc';
import { PostHandler } from '@/PostHandler';

export default async function page({ params }: { params: { slug: string } }) {
    const post = new PostHandler(params.slug);
    return (
        <article>
            <MDXRemote source={post.getContent()} />
        </article>
    );
}
