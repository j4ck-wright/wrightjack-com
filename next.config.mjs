import NextMdx from '@next/mdx';

const withMDX = NextMdx();

/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
    output: 'export',
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

export default withMDX(nextConfig);
