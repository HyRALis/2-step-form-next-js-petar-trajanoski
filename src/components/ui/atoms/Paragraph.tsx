import { tailwindMerge } from '@/utils/tailwindMerge';
import React from 'react';

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
    text: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({ text, className, ...rest }) => {
    return (
        <p className={tailwindMerge(['text-[12px] leading-[16px] font-300 text-darkBlue', className])} {...rest}>
            {text}
        </p>
    );
};
