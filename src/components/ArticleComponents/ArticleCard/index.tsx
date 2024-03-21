import { FaRegCalendar } from 'react-icons/fa6';
import IconSpan from '../../UI/IconSpan';
import { Post } from '@/types/post';
import { SlClock } from 'react-icons/sl';
import { formatDate } from '@/utils/dateFormatter';

export default function ArticleCard({
    title,
    description,
    date,
    minutes_to_read,
    slug,
}: Partial<Post.Metadata>) {
    return (
        <a
            className="flex flex-col md:flex-row justify-between border border-b-4 border-l-4 border-[#afafaf] p-4"
            href={`/notes/${slug}`}
        >
            <div className="flex flex-col">
                <h2 className="text-xl font-bold">{title}</h2>
                <p>{description}</p>
            </div>
            <div className="flex flex-col gap-1 pt-2 md:justify-center md:gap-0 md:pt-0">
                {date && formatDate(date) !== '' && (
                    <IconSpan
                        aria-label="date published"
                        Icon={FaRegCalendar}
                        text={formatDate(date)}
                    />
                )}

                <IconSpan Icon={SlClock} text={`${minutes_to_read} min read`} />
            </div>
        </a>
    );
}
