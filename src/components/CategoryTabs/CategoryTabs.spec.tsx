import { render, screen } from '@testing-library/react';
import CategoryTabs from '.';

describe('CateogryTabs', () => {
    it('Renders correctly', () => {
        render(
            <CategoryTabs
                categories={['JavaScript', 'CI/CD', 'NextJs', 'TypeScript']}
            />
        );

        screen.findByText('JavScript');
        screen.findByText('CI/CD');
        screen.findByText('NextJs');
        screen.findByText('TypeScript');
    });

    it('Does not render if no cateogries', () => {
        const { container } = render(<CategoryTabs />);

        expect(container.childElementCount).toEqual(0);
    });
});
