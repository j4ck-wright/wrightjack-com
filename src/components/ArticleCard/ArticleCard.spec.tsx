import { render, screen } from '@testing-library/react';
import ArticleCard from '.';

describe('ArticleCard', () => {
    it('Renders correctly', () => {
        render(
            <ArticleCard
                author="Jack"
                date="2024/10/22"
                description="desc"
                minutes_to_read={5}
                title="title"
            />
        );

        screen.getByText('5 min read');
        screen.getByText('desc');
        screen.getByText('title');
        screen.getByText('Tuesday, 22 Oct 2024');
    });

    it('does not render date', () => {
        render(
            <ArticleCard
                author="Jack"
                date="broken date"
                description="desc"
                minutes_to_read={5}
                title="title"
            />
        );

        expect(screen.queryByText('min read')).toBeNull();
        expect(screen.queryByText('Invalid Date')).toBeNull();
    });
});
