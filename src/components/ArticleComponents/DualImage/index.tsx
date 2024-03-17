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
        <div className="flex flex-col justify-between md:gap-6 md:flex-row">
            <div className="md:w-[50%]">
                <ImageStretch
                    src={props.leftSrc}
                    alt={props.leftAlt}
                    caption={props.leftCaption}
                />
            </div>
            <div className="md:w-[50%]">
                <ImageStretch
                    src={props.rightSrc}
                    alt={props.rightAlt}
                    caption={props.rightCaption}
                />
            </div>
        </div>
    );
}
