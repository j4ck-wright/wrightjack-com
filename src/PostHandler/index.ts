import { Post } from '@/types/post';
import fs from 'fs';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';

const processFile = (file: string) => {
    const {
        data: metadata,
        content,
    }: { data: Partial<Post.Metadata>; content: string } = matter(file);

    return {
        content,
        metadata,
    };
};

export const getPostBySlug = (slug: string) => {
    let markdownFile = '';
    try {
        markdownFile = fs.readFileSync(`posts/${slug}.mdx`, 'utf-8');
    } catch (err: unknown) {
        notFound();
    }

    return { ...processFile(markdownFile), slug };
};
