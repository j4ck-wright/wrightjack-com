export namespace Post {
    export type Metadata = {
        title: string;
        author: string;
        date: string;
        published: boolean;
        minutes_to_read: number;
        categories: Categories[];
    };

    export type Categories = 'add categories here in the future..';
}
