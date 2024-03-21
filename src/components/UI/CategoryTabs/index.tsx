import { Post } from '@/types/post';
import { getCategoryColor } from '@/utils/categoryColor';

export default function CategoryTabs({
    categories,
}: {
    categories?: Post.Categories[];
}) {
    if (!categories) return null;

    return (
        <ul aria-label="categories" className="flex flex-wrap gap-2">
            {categories.map((category, index) => {
                const { background, border, text } = getCategoryColor(category);
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
    );
}
