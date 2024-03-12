import { Navbar } from '@/components/Navbar';

const NavbarCtas = [
    { href: '/', text: 'Home' },
    { href: '/projects', text: 'Projects' },
    { href: '/notes', text: 'Notes' },
];

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar ctas={NavbarCtas} />
            <main>{children}</main>
        </>
    );
}
