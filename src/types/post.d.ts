export namespace Post {
    export type Metadata = {
        title: string;
        author: string;
        date: string;
        description: string;
        published: boolean;
        minutes_to_read: number;
        categories: Categories[];
    };

    export type Categories = 'TypeScript' | 'JavaScript' | 'NextJs' | 'CI/CD';
}
