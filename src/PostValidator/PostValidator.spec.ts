import { Post } from '@/types/post';
import { checkHeaderOrder } from './helpers';
import { components } from '@/app/(routes)/notes/[slug]/page';
import { formatDate } from '@/utils/dateFormatter';
import { getAllPosts } from '@/PostHandler';
import { readdirSync } from 'fs';

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
            metadataItemExists('slug', metadata, slug);
            metadataItemExists('description', metadata, slug);
            metadataItemExists('minutes_to_read', metadata, slug);
            metadataItemExists('published', metadata, slug);
        });
    });

    it('does not container any h1 in markdown', () => {
        allPosts.forEach(({ content, slug }) => {
            const pattern = /^# \S.+/gm;
            if (pattern.test(content)) {
                throw new Error(
                    `${prefix} ${slug}.mdx contains one or more header 1. h1 is reserved for the ArticleHeader`
                );
            }
        });
    });

    it('follows headers in order', () => {
        allPosts.forEach(({ content, slug }) => {
            const correctOrder = checkHeaderOrder(content);

            if (!correctOrder) {
                throw new Error(
                    `${prefix} ${slug}.mdx has incorrect header ordering. Check if you've missed a header or have a higher header nested in a lower one`
                );
            }
        });
    });

    it('has valid date', () => {
        allPosts.forEach(({ metadata, slug }) => {
            const date = formatDate(metadata.date as string);

            if (date === '') {
                throw new Error(
                    `${prefix} ${slug}.mdx has incorrect date format YYYY/MM/DD (${metadata.date})`
                );
            }
        });
    });

    it('all components are recognised by mdx', () => {
        const markdownComponents = readdirSync(
            'src/components/MarkdownComponents'
        );

        if (markdownComponents.length !== Object.keys(components).length) {
            throw new Error(
                `${prefix} - Missmatch in number of components in @/components/MarkdownComponents vs @/app/(routes)/notes/[slug]/page - have you remembered to update the component list?`
            );
        }
    });
});
