'use client';

import ImageStretch from '../SingleImageStretch';

type Props = {
    leftSrc: string;
    leftAlt?: string;
    leftCaption?: string;
    rightSrc: string;
    rightAlt?: string;
    rightCaption?: string;
};

export default function DualImage(props: Props) {
    return (
        <div className="flex justify-between gap-6">
            <div className="w-[50%]">
                <ImageStretch
                    src={props.leftSrc}
                    alt={props.leftAlt}
                    caption={props.leftCaption}
                />
            </div>
            <div className="w-[50%]">
                <ImageStretch
                    src={props.rightSrc}
                    alt={props.rightAlt}
                    caption={props.rightCaption}
                />
            </div>
        </div>
    );
}
