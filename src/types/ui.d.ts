export namespace UI {
    export type Cta = {
        text?: string;
        href?: string;
    };

    export type MediaIcon = {
        alt?: string | undefined;
        href: string;
        media: SocialMedias;
    };

    export type SocialMedias = 'Github' | 'Twitter' | 'LinkedIn';
}
