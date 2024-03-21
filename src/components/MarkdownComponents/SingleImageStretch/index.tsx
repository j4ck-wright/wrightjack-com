'use client';

import '@/styles/skeleton.css';
import Image from 'next/image';
import { useState } from 'react';

type Props = {
    src: string;
    alt?: string;
    caption?: string;
    priority?: boolean;
};

export default function ImageStretch({
    alt,
    src,
    caption,
    priority = false,
}: Props) {
    const [reveal, setReveal] = useState(false);
    return (
        <div data-testid="image-stretch" className="my-4">
            <div className={`relative aspect-[16/8]`}>
                {!reveal && <div className="skeleton" />}
                <Image
                    src={src}
                    alt={alt || ''}
                    fill={true}
                    loading="eager"
                    onError={() => setReveal(true)}
                    onLoad={() => setReveal(true)}
                    priority={priority}
                    className="align-top"
                />
            </div>
            {caption && (
                <p className="max-w-[90%] mx-auto mb-0 pt-2 text-base text-center italic">
                    {caption}
                </p>
            )}
        </div>
    );
}
