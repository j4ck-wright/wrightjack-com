import { defaultExclude, defineConfig } from 'vitest/config';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    test: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
        coverage: {
            exclude: [
                ...defaultExclude,
                '.next',
                '.husky',
                '*.config.{js,ts,mjs}',
                'src/app/robots.ts',
                'src/app/sitemap.ts',
            ],
            provider: 'istanbul',
        },
        environment: 'jsdom',
        globals: true,
        include: ['./src/**/*{test,spec}.{ts,tsx}'],
    },
});
