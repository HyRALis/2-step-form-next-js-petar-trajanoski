import { tailwindMerge } from '@/services/utils/tailwindMerge';
import React from 'react';

export interface HeaderContainerProps {
    children: React.ReactNode;
    className?: string;
}

export const HeaderContainer: React.FC<HeaderContainerProps> = ({ children, className }) => {
    return (
        <div
            className={tailwindMerge([
                className,
                'flex justify-between items-center fixed top-0 z-10 w-full h-[72px] backdrop-blur-xl px-2'
            ])}
        >
            {children}
        </div>
    );
};
