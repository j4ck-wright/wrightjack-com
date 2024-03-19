import CategoryTabs from '@/components/CategoryTabs';
import IconSpan from '@/components/IconSpan';
import { Post } from '@/types/post';
import { SlClock } from 'react-icons/sl';
import { formatDate } from '@/utils/dateFormatter';

type Author = {
    name?: string;
    imageSrc?: string;
};

type Props = {
    title: string;
    author: Author;
    date: string;
    timeToRead: number;
    categories?: Post.Categories[];
};

export default function ArticleHeader({
    author,
    date,
    title,
    timeToRead,
    categories,
}: Partial<Props>) {
    return (
        <header className="py-8 md:pb-16 md:pt-24">
            <h1 className="text-4xl pb-5">{title}</h1>
            <div className="flex justify-between items-center">
                <div className="flex items-center left">
                    <img
                        className="rounded-full w-[50px] h-[50px] aspect-square"
                        src={author?.imageSrc}
                        alt=""
                    />
                    <div className="pl-2 flex-col right">
                        <span aria-label="author" className="block text-2xl">
                            {author?.name}
                        </span>
                        {date && (
                            <span
                                aria-label="date published"
                                className="text-base"
                            >
                                {formatDate(date)}
                            </span>
                        )}
                    </div>
                </div>

                {timeToRead && (
                    <IconSpan Icon={SlClock} text={`${timeToRead} min read`} />
                )}
            </div>

            {categories && (
                <div className="pt-4">
                    <CategoryTabs categories={categories} />
                </div>
            )}
        </header>
    );
}
