import { tailwindMerge } from '@/utils/tailwindMerge';
import React from 'react';

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
    text: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({ text, className, ...rest }) => {
    return (
        <p className={tailwindMerge(['text-xs leading-4 font-light text-darkBlue', className])} {...rest}>
            {text}
        </p>
    );
};
