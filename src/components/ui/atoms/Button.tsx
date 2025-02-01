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
    const transparent = 'text-primary hover:text-darkBlueTransparent';

    const defaultSize = 'text-[16px] leading-[24px] px-[24px] py-[16px]';
    const smallSize = 'text-[14px] leading-[20px] px-[20px] py-[14px]';
    const extraSmallSize = 'text-[12px] leading-[16px] px-[16px] py-[12px]';

    return (
        <button
            className={`${tailwindMerge([
                className,
                variant === 'primary' ? primaryClassName : variant === 'secondary' ? secondaryClassName : transparent,
                size === 'xs' ? extraSmallSize : size === 'sm' ? smallSize : defaultSize,
                'flex items-center justify-center space-x-2 p-2 rounded-full font-bold font-[family-name:var(--font-hanken-grotesk)]'
            ])}`}
            {...rest}
        >
            {icon}
            {text}
        </button>
    );
};
