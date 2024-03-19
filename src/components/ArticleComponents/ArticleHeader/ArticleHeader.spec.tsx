import { render, screen } from '@testing-library/react';
import ArticleHeader from '.';
import { Post } from '@/types/post';

const headerFixture: Post.Metadata = {
    author: 'Jack Wright',
    categories: [],
    date: '2024/03/16',
    description: 'Lorem ipsum',
    minutes_to_read: 14,
    published: true,
    title: 'Article Fixture Spec',
};

vi.mock('@/components/CategoryTabs', () => ({
    default: () => {
        return <div>CategoryTabs</div>;
    },
}));

describe('ArticleHeader', () => {
    it('Renders correctly', () => {
        render(
            <ArticleHeader
                author={{ imageSrc: 'author-img', name: headerFixture.author }}
                date={headerFixture.date}
                timeToRead={headerFixture.minutes_to_read}
                title={headerFixture.title}
                categories={['JavaScript', 'CI/CD', 'NextJs', 'TypeScript']}
            />
        );

        screen.getByText(headerFixture.title);
        screen.getByText(headerFixture.author);
        screen.getByText(`${headerFixture.minutes_to_read} min read`);
        screen.getByText('Saturday, 16 Mar 2024');
        screen.getByText('CategoryTabs');

        expect(screen.getByRole('img').getAttribute('src')).toEqual(
            'author-img'
        );
        expect(screen.getByRole('img').getAttribute('alt')).toEqual('');
    });

    it('Does not render the date if not passed', () => {
        render(
            <ArticleHeader
                author={{ imageSrc: 'author-img', name: headerFixture.author }}
                timeToRead={headerFixture.minutes_to_read}
                title={headerFixture.title}
            />
        );

        screen.getByText(headerFixture.title);
        screen.getByText(headerFixture.author);
        screen.getByText(`${headerFixture.minutes_to_read} min read`);
        expect(
            screen.getByRole('img').parentNode?.children[1]?.childElementCount
        ).toEqual(1);
    });

    it('Does not render the date if invalid ', () => {
        render(
            <ArticleHeader
                author={{ imageSrc: 'author-img', name: headerFixture.author }}
                date="fake date"
                timeToRead={headerFixture.minutes_to_read}
                title={headerFixture.title}
            />
        );

        expect(screen.queryByText('Invalid Date')).toBeNull();
    });

    it('Does not render the length of time to read ', () => {
        render(
            <ArticleHeader
                author={{ imageSrc: 'author-img', name: headerFixture.author }}
                date={headerFixture.date}
                title={headerFixture.title}
            />
        );

        expect(screen.queryByText('min read')).toBeNull();
    });

    it('Does not render categories', () => {
        render(
            <ArticleHeader
                author={{ imageSrc: 'author-img', name: headerFixture.author }}
                date={headerFixture.date}
                title={headerFixture.title}
            />
        );

        expect(screen.queryByRole('list')).toBeNull();
    });
});
