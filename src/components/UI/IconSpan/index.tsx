import { IconType } from 'react-icons';

type Props = {
    Icon: IconType;
    text: string;
    ['aria-label']?: string;
    ['aria-hidden']?: boolean;
};

export default function IconSpan({
    Icon,
    text,
    'aria-label': ariaLabel,
    'aria-hidden': ariaHidden = true,
}: Props) {
    return (
        <div className="flex items-center gap-2">
            <Icon
                width={'20px'}
                height={'20px'}
                className="align-bottom"
                aria-hidden={ariaHidden}
            />
            <span aria-label={ariaLabel}>{text}</span>
        </div>
    );
}
