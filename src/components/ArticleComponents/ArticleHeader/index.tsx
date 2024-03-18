import { Post } from '@/types/post';
import { SlClock } from 'react-icons/sl';
import { getCategoryColor } from '@/utils/categoryColor';

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

const formatDate = (date: string) => {
    const newDate = new Date(date).toLocaleString('en-gb', {
        day: 'numeric',
        month: 'short',
        weekday: 'long',
        year: 'numeric',
    });

    if (newDate === 'Invalid Date') {
        return '';
    }

    return newDate;
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
                    <div className="flex items-center gap-2">
                        <SlClock
                            width={'20px'}
                            height={'20px'}
                            className="align-bottom"
                        />
                        <span className="text-[#5d5d5d]">
                            {timeToRead} min read
                        </span>
                    </div>
                )}
            </div>

            {categories && (
                <ul
                    aria-label="categories"
                    className="pt-4 flex flex-wrap gap-2"
                >
                    {categories.map((category, index) => {
                        const { background, border, text } =
                            getCategoryColor(category);
                        return (
                            <li
                                className="py-1 px-3 text-sm border-b-4"
                                style={{
                                    background: background,
                                    borderColor: border,
                                    color: text,
                                }}
                                key={index}
                            >
                                {category}
                            </li>
                        );
                    })}
                </ul>
            )}
        </header>
    );
}
