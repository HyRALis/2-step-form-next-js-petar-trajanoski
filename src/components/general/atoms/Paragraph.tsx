import { tailwindMerge } from '@/services/utils/tailwindMerge';
import React from 'react';

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode | string;
}

export const Paragraph: React.FC<ParagraphProps> = ({ children, className, ...rest }) => {
    return (
        <p className={tailwindMerge(['text-xs font-light text-darkBlue', className])} {...rest}>
            {children}
        </p>
    );
};
