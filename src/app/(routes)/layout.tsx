import Footer from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { UI } from '@/types/ui';

const navbarCtas: UI.Cta[] = [
    { href: '/', text: 'Home' },
    { href: '/projects', text: 'Projects' },
    { href: '/notes', text: 'Notes' },
];

const footerCtas: UI.MediaIcon[] = [
    { alt: 'Twitter', href: '/', media: 'Twitter' },
    { alt: 'LinkedIn', href: '/', media: 'LinkedIn' },
    { alt: 'Github', href: '/', media: 'Github' },
];

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar ctas={navbarCtas} />
            <main>{children}</main>
            <Footer ctas={footerCtas} />
        </>
    );
}
