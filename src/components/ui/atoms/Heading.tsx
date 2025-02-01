import { tailwindMerge } from '@/utils/tailwindMerge';
import React from 'react';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    text: string;
}

export const Heading: React.FC<HeadingProps> = ({ text, className, ...rest }) => {
    return (
        <h3
            className={`${tailwindMerge([
                className,
                'text-darkBlue text-[20px] font-bold leading-[28px] font-[family-name:var(--font-eb-garamond)]'
            ])}`}
            {...rest}
        >
            {text}
        </h3>
    );
};
