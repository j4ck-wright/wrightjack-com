import { Mock } from 'vitest';
import fs from 'fs';
import { getPostBySlug } from '.';
import { notFound } from 'next/navigation';

vi.mock('fs');

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

describe('PostHandler', () => {
    it('fetches post via slug', () => {
        const inputSlug = 'test-example';
        const { metadata, content, slug } = getPostBySlug(inputSlug);

        expect(slug).toEqual(inputSlug);
        expect(metadata.author).toEqual('Example Author');
        expect(content).toEqual('markdown content');
    });

    it('returns 404 if slug not found', () => {
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
