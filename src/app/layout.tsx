import './globals.css';

import type { Metadata } from 'next';

import { Navbar } from '@/components/Navbar';

import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
    description: 'Generated by create next app',
    title: 'Create Next App',
};

const NavbarCtas = [
    { href: '/', text: 'Home' },
    { href: '/projects', text: 'Projects' },
    { href: '/notes', text: 'Notes' },
];

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={urbanist.className}>
                <Navbar ctas={NavbarCtas} />
                {children}
            </body>
        </html>
    );
}
