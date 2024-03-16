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
        <div data-testid="image-stretch" className="mb-4">
            <div className={`relative aspect-[16/8]`}>
                {!reveal && <div className="skeleton" />}
                <Image
                    src={src}
                    alt={alt || ''}
                    fill={true}
                    loading="eager"
                    onError={() => setReveal(true)}
                    onLoad={() => setReveal(true)}
                    className="align-top"
                />
            </div>
            {caption && (
                <div className="flex justify-center pt-2 px-2">
                    <span
                        className={`max-w-[90%] ${!reveal && 'skeleton skeleton-text'}`}
                    >
                        <p
                            className={`mb-0 text-base text-center italic ${!reveal && 'opacity-0'} `}
                        >
                            {caption}
                        </p>
                    </span>
                </div>
            )}
        </div>
    );
}
