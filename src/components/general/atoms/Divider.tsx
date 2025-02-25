import React from 'react';

import { tailwindMerge } from '@/services/utils/tailwindMerge';

export const Divider: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  ...rest
}) => {
  return (
    <div
      className={tailwindMerge([
        'h-[1px] bg-darkBlue4 w-full flex-shrink-0 flex-grow-0',
        className,
      ])}
      {...rest}
    ></div>
  );
};
