'use client';

import '@/styles/skeleton.css';
import Image from 'next/image';
import { useState } from 'react';

type Props = {
    src: string;
    alt?: string;
    caption?: string;
};

export default function ImageStretch({ alt, src, caption }: Props) {
    const [reveal, setReveal] = useState(false);
    return (
        <figure className="relative aspect-[16/8] mb-16">
            {!reveal && <div className="skeleton" />}
            <Image
                src={src}
                alt={alt || ''}
                fill={true}
                loading="eager"
                onError={() => setReveal(true)}
                onLoad={() => setReveal(true)}
            />
            {caption && (
                <figcaption className="absolute left-0 right-0 mx-auto -bottom-8 flex justify-center mt-2 ">
                    <div
                        className={`px-2 ${!reveal && 'skeleton skeleton-text'}`}
                    >
                        <span className={`${!reveal && 'opacity-0'}`}>
                            {caption}
                        </span>
                    </div>
                </figcaption>
            )}
        </figure>
    );
}
