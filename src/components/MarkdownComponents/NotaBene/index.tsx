import Markdown from 'react-markdown';

export default function NotaBene({ content }: { content: string }) {
    return (
        <div className="border-black border-l-2 p-0 pl-4 my-4 italic">
            <Markdown>{content}</Markdown>
        </div>
    );
}
