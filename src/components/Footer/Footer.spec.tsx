import { render, screen } from '@testing-library/react';
import Footer from '.';
import { UI } from '@/types/ui';

const footerCtas: UI.MediaIcon[] = [
    { alt: 'Twitter', href: '/twit', media: 'Twitter' },
    { alt: 'LinkedIn', href: '/linked', media: 'LinkedIn' },
    { alt: 'Github', href: '/github', media: 'Github' },
];

describe('Footer', () => {
    it('Renders correctly', () => {
        render(<Footer ctas={footerCtas} />);

        footerCtas.forEach(({ alt, href }) => {
            expect(
                screen.queryByTitle(alt as string)?.getAttribute('href')
            ).toEqual(href);
        });
    });
});
