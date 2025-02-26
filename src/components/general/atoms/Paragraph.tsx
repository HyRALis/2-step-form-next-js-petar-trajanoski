import React from 'react';

import { tailwindMerge } from '@/services/utils/tailwindMerge';

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode | string;
}

export const Paragraph: React.FC<ParagraphProps> = ({ children, className, ...rest }) => {
  return (
    <p
      className={tailwindMerge(['text-xs leading-[1.5] font-light text-darkBlue', className])}
      {...rest}
    >
      {children}
    </p>
  );
};
