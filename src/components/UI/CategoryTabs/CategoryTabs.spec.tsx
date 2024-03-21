import { render, screen } from '@testing-library/react';
import CategoryTabs from '.';

describe('CateogryTabs', () => {
    it('Renders correctly', () => {
        render(
            <CategoryTabs
                categories={['JavaScript', 'CI/CD', 'NextJs', 'TypeScript']}
            />
        );

        screen.getByText('JavaScript');
        screen.getByText('CI/CD');
        screen.getByText('NextJs');
        screen.getByText('TypeScript');
    });

    it('Does not render if no cateogries', () => {
        const { container } = render(<CategoryTabs />);

        expect(container.childElementCount).toEqual(0);
    });
});
