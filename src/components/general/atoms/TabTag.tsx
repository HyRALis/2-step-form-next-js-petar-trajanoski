'use client';

import { CheckmarkIcon } from '@/assets/icons/CheckmarkIcon';
import { tailwindMerge } from '@/services/utils/tailwindMerge';
import React, { useCallback } from 'react';

export interface TabTagProps {
    text: string;
    variant?: 'default' | 'active' | 'finished';
    onClick?: () => void;
}

export const TabTag: React.FC<TabTagProps> = ({ text, variant = 'default', onClick }) => {
    const handleOnClick = useCallback(() => {
        if (onClick && variant !== 'active') onClick();
    }, [variant, onClick]);

    const activeClass = 'bg-primary text-white';

    return (
        <button
            className={`${tailwindMerge([
                'min-w-8 h-8 flex items-center justify-center rounded-full bg-darkBlue4 text-darkBlue12 font-[family-name:var(--font-eb-garamond)] font-bold text-base transition-all duration-200 ease-in-out',
                onClick ? 'cursor-pointer' : 'cursor-default',
                (variant === 'active' || variant === 'finished') && activeClass
            ])}`}
            disabled={!!onClick}
            aria-disabled={!!onClick}
            onClick={handleOnClick}
        >
            {variant === 'finished' ? <CheckmarkIcon /> : text}
        </button>
    );
};
