import { MDXRemote } from 'next-mdx-remote/rsc';
import { PostHandler } from '@/PostHandler';

export default async function page({ params }: { params: { slug: string } }) {
    const post = new PostHandler(params.slug);
    return <MDXRemote source={post.getContent()} />;
}
