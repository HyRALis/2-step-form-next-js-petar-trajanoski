import { tailwindMerge } from '@/services/utils/tailwindMerge';
import React from 'react';
import { Spinner } from './Spinner';

export type ButtonVariant = 'primary' | 'secondary' | 'transparent' | 'disabled' | 'icon';
export type ButtonSize = 'xs' | 'sm' | 'md';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    text?: string;
    icon?: React.ReactNode;
    isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    text,
    icon,
    isLoading,
    className,
    ...rest
}) => {
    const variantClasses = {
        primary: 'bg-primary hover:bg-primaryDark text-white',
        secondary: 'bg-primaryLighter hover: bg-primaryLight text-primary',
        transparent: 'text-primary hover:bg-darkBlue4',
        icon: 'text-darkBlue hover:bg-darkBlue4',
        disabled: 'bg-gray-400 text-gray-700 cursor-not-allowed'
    };

    const sizeClasses = {
        xs: 'text-base leading-6 px-6 py-4',
        sm: 'text-sm leading-5 px-5 py-[14px]',
        md: 'text-base leading-6 px-6 py-4'
    };

    return (
        <button
            className={`${tailwindMerge([
                variantClasses[variant],
                sizeClasses[size],
                'flex items-center justify-center space-x-2 rounded-full font-bold font-[family-name:var(--font-hanken-grotesk)] hover:-translate-y-[1px] transition-all duration-200 ease-in-out',
                className
            ])}`}
            {...rest}
        >
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    {icon}
                    {text}
                </>
            )}
        </button>
    );
};
