import { Post } from '@/types/post';

export const getCategoryColor = (category: Post.Categories) => {
    switch (category) {
        case 'JavaScript':
            return {
                background: '#ffcc00',
                border: '#ba9500',
                text: '#000',
            };
        case 'CI/CD':
            return {
                background: '#f3774d',
                border: '#ba5b3c',
                text: '#000',
            };
        case 'NextJs':
            return {
                background: '#333333',
                border: '#000',
                text: '#fff',
            };
        case 'TypeScript':
            return {
                background: '#007acc',
                border: '#01538a',
                text: '#fff',
            };
    }
};
