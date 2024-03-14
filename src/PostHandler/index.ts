import { Post } from '@/types/post';
import { readFileSync } from 'fs';

export class PostHandler {
    protected content: string;
    protected metadata: Partial<Post.Metadata>;

    constructor(slug: string) {
        const content = this.readFile(slug);
        this.content = content;
        this.metadata = this.parseMetadata();
        console.log(this.metadata);
    }

    getContent() {
        return this.content;
    }

    private readFile(slug: string) {
        const content = readFileSync(`posts/${slug}/body.mdx`, 'utf-8');
        return content;
    }

    private parseMetadata() {
        const metadataRegex = /export\s+const\s+(\w+)\s*=\s*([^\n;]+)/g;
        const metadata: Record<string, unknown> = {};

        Array.from(this.content.matchAll(metadataRegex), (match) => {
            const key = match[1]?.toLowerCase();
            const value = match[2]?.trim().replace(/['"]/g, ''); // Remove quotes
            if (key && value) {
                metadata[key] = value;
            }
        });
        return metadata as Partial<Post.Metadata>;
    }
}
