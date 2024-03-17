import React from 'react';

type Author = {
    name?: string;
    imageSrc?: string;
};

type Props = {
    title: string;
    author: Author;
    date: string;
    timeToRead: number;
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
                    <div className="flex gap-2">
                        <svg
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            aria-hidden
                        >
                            <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z" />
                        </svg>
                        <span className="text-[#5d5d5d]">
                            {timeToRead} min read
                        </span>
                    </div>
                )}
            </div>
        </header>
    );
}
