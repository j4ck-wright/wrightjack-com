import { render, screen } from '@testing-library/react';
import Footer from '.';
import { UI } from '@/types/ui';

const footerCtas: UI.MediaIcon[] = [
    { alt: 'Twitter', href: '/', media: 'Twitter' },
    { alt: 'LinkedIn', href: '/', media: 'LinkedIn' },
    { alt: 'Github', href: '/', media: 'Github' },
];

vi.mock('@/components/IconCta', () => ({
    default: () => {
        return <div>IconCta</div>;
    },
}));

describe('Footer', () => {
    it('Renders correctly', () => {
        render(<Footer ctas={footerCtas} />);
        expect(screen.getAllByText('IconCta').length).toEqual(
            footerCtas.length
        );
    });
});
