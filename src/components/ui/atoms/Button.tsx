import { tailwindMerge } from '@/utils/tailwindMerge';
import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'transparent' | 'disabled';
export type ButtonSize = 'xs' | 'sm' | 'md';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    text?: string;
    icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'md', text, icon, className, ...rest }) => {
    const primaryClassName = 'bg-primary hover:bg-primaryDark text-white';
    const secondaryClassName = 'bg-primaryLighter hover: bg-primaryLight text-primary';
    const transparent = 'text-primary hover:bg-darkBlue4';

    const defaultSize = 'text-base leading-6 px-6 py-4';
    const smallSize = 'text-sm leading-5 px-5 py-[14px]';
    const extraSmallSize = 'text-xs leading-4 px-4 py-3';

    return (
        <button
            className={`${tailwindMerge([
                className,
                variant === 'primary' ? primaryClassName : variant === 'secondary' ? secondaryClassName : transparent,
                size === 'xs' ? extraSmallSize : size === 'sm' ? smallSize : defaultSize,
                'flex items-center justify-center space-x-2 rounded-full font-bold font-[family-name:var(--font-hanken-grotesk)]'
            ])}`}
            {...rest}
        >
            {icon}
            {text}
        </button>
    );
};
