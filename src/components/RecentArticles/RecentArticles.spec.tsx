import { render, screen } from '@testing-library/react';
import { Post } from '@/types/post';
import RecentArticles from '.';

const articleFixture: Post.Metadata[] = [
    {
        author: 'Jack',
        categories: ['JavaScript'],
        date: '2024/10/02',
        description: 'desc',
        minutes_to_read: 5,
        published: true,
        slug: 'slug',
        title: 'title',
    },
    {
        author: 'not Jack',
        categories: ['CI/CD'],
        date: '2024/10/04',
        description: 'desc2',
        minutes_to_read: 50,
        published: true,
        slug: 'slugs!',
        title: 'title2',
    },
];

vi.mock('@/components/ArticleCard', () => ({
    default: () => {
        return <div>ArticleCard</div>;
    },
}));

describe('RecentArticles', () => {
    it('Renders correctly', () => {
        render(<RecentArticles articles={articleFixture} />);

        expect(screen.getAllByText('ArticleCard').length).toEqual(
            articleFixture.length
        );
        expect(screen.getByRole('list').childElementCount).toEqual(
            articleFixture.length
        );
    });

    it('Shows message if no articles', () => {
        render(<RecentArticles articles={[]} />);

        screen.getByText("Couldn't find any posts :(");
    });
});
