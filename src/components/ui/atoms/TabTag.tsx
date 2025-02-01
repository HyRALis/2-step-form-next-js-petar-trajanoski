'use client';

import { tailwindMerge } from '@/utils/tailwindMerge';
import React, { useCallback } from 'react';

export interface TabTagProps {
    text: string;
    isActive?: boolean;
    onClick?: () => void;
}

export const TabTag: React.FC<TabTagProps> = ({ text, isActive, onClick }) => {
    const handleOnClick = useCallback(() => {
        if (onClick && !isActive) onClick();
    }, [isActive, onClick]);

    const activeClass = 'bg-primary text-white';

    return (
        <button
            className={`${tailwindMerge([
                'w-[32px] h-[32px] flex items-center justify-center rounded-full bg-darkBlue4 text-darkBlue12 font-[family-name:var(--font-eb-garamond)] font-bold text-[16px] leading-[24px]',
                isActive && activeClass
            ])}`}
            onClick={handleOnClick}
        >
            {text}
        </button>
    );
};
