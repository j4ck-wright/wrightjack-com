import RecentArticles from '@/components/ArticleComponents/RecentArticles';
import { getAllPosts } from '@/PostHandler';

export default function Home() {
    const posts = getAllPosts().filter((post) => post.metadata.published);
    const postMetadata = posts.map((post) => post.metadata);

    return (
        <>
            <RecentArticles articles={postMetadata} />
        </>
    );
}
