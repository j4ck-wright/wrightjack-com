import ArticleCard from '../ArticleCard';
import { Post } from '@/types/post';

function RecentArticles({ articles }: { articles: Partial<Post.Metadata>[] }) {
    return (
        <div className="px-4 xl:px-0 m-auto max-w-[90%] lg:max-w-[1044px]">
            <h1 className="font-bold text-3xl text-center p-4">Recent Notes</h1>
            {articles.length ? (
                <ul>
                    {articles.map((article, index) => {
                        return (
                            <li key={index}>
                                <ArticleCard {...article} />
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p className="text-center text-xl">
                    Couldn&apos;t find any posts :(
                </p>
            )}
        </div>
    );
}

export default RecentArticles;
