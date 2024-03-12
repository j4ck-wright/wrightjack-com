import { render, screen } from '@testing-library/react';
import { Navbar } from '.';

const NavbarCtas = [
    { href: '/', text: 'Home' },
    { href: '/projects', text: 'Projects' },
    { href: '/notes', text: 'Notes' },
];

describe('Navbar', () => {
    it('Renders correctly', () => {
        render(<Navbar ctas={NavbarCtas} />);
        NavbarCtas.forEach((cta) => {
            screen.getByText(cta.text);
            expect(screen.getByText(cta.text).getAttribute('href')).toBe(
                cta.href
            );
        });
    });

    it('Does not render if no href', () => {
        const modifiedCtas = [...NavbarCtas, { href: '', text: 'Contact' }];
        render(<Navbar ctas={modifiedCtas} />);
        expect(screen.getAllByRole('link').length).toEqual(NavbarCtas.length);
        expect(screen.queryByText('Contact')).toBeNull();
    });

    it('Does not render if no text', () => {
        const modifiedCtas = [...NavbarCtas, { href: '/contact', text: '' }];
        render(<Navbar ctas={modifiedCtas} />);
        expect(screen.getAllByRole('link').length).toEqual(NavbarCtas.length);
    });
});
