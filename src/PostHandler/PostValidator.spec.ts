import { Post } from '@/types/post';
import { getAllPosts } from '.';

const prefix = '[POST-VALIDATION]:';

const metadataItemExists = (
    item: keyof Post.Metadata,
    metadata: Partial<Post.Metadata>,
    slug: string
) => {
    if (!metadata[item]) {
        throw new Error(
            `${prefix} ${item} not found in metadata for ${slug}.mdx: \n\n${JSON.stringify(metadata, undefined, 2)}\n`
        );
    }
};

describe('Post checking', () => {
    const allPosts = getAllPosts();

    it('contains required metadata', () => {
        allPosts.forEach(({ metadata, slug }) => {
            metadataItemExists('author', metadata, slug);
            metadataItemExists('title', metadata, slug);
            metadataItemExists('date', metadata, slug);
        });
    });

    it('does not container any h1 in markdown', () => {
        allPosts.forEach(({ content, slug }) => {
            const pattern = /^# \S.+/gm;
            if (pattern.test(content)) {
                throw new Error(
                    `${prefix} ${slug}.mdx contains one or more header 1. h1 is reserved for the ArticleHeader\n`
                );
            }
        });
    });
});
