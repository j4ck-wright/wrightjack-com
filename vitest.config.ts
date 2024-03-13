import { defineConfig } from 'vitest/config';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    test: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
        environment: 'jsdom',
        globals: true,
    },
});
