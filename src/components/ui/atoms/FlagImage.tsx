import Image from 'next/image';
import React from 'react';

export interface FlagImageProps {
    src: string;
    alt: string;
}

export const FlagImage: React.FC<FlagImageProps> = ({ src, alt }) => {
    return (
        <div className="flex justify-center items-center flex-shrink-0 flex-grow-0w-8 h-8 rounded-full overflow-hidden">
            <Image src={src} alt={alt} width={32} height={32} className="object-cover" />
        </div>
    );
};
