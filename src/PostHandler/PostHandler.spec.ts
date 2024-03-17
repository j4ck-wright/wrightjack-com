import { getAllPosts, getPostBySlug } from '.';
import { Mock } from 'vitest';
import fs from 'fs';
import { notFound } from 'next/navigation';

vi.mock('gray-matter', () => ({
    default: vi.fn().mockReturnValue({
        content: 'markdown content',
        data: {
            author: 'Example Author',
            description: 'lorem ipsum description',
            minutes_to_read: '10',
            published: 'today!',
            title: 'Example Title',
        },
    }),
}));

vi.mock('fs');

describe('PostHandler', () => {
    describe('postBySlug', () => {
        afterEach(() => {
            vi.clearAllMocks();
        });

        it('fetches correctly', () => {
            const inputSlug = 'test-example';
            const { metadata, content, slug } = getPostBySlug(inputSlug);

            expect(slug).toEqual(inputSlug);
            expect(metadata.author).toEqual('Example Author');
            expect(content).toEqual('markdown content');
        });

        it('returns 404', () => {
            vi.mock('next/navigation', () => ({
                notFound: vi.fn(),
            }));

            (fs.readFileSync as Mock).mockImplementationOnce(() => {
                throw new Error('Mocked file read error');
            });

            getPostBySlug('1');
            expect(notFound).toHaveBeenCalledOnce();
        });
    });

    describe('getAllPosts', () => {
        afterEach(() => {
            vi.clearAllMocks();
        });

        it('fetches all posts', () => {
            const dirFixture = ['example.mdx', 'example2.mdx', 'example3.mdx'];

            vi.mocked(fs.readdirSync).mockReturnValueOnce(dirFixture as any[]);

            const posts = getAllPosts();

            posts.forEach(({ slug }, index) => {
                expect(slug).toEqual(dirFixture[index]?.replace('.mdx', ''));
            });
        });

        it('fetches empty array when no posts', () => {
            vi.mocked(fs.readdirSync).mockReturnValueOnce([]);

            const posts = getAllPosts();

            expect(posts.length).toEqual(0);
        });
    });
});
