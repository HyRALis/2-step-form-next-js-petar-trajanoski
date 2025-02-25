import React from 'react';

import { tailwindMerge } from '@/services/utils/tailwindMerge';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={tailwindMerge(['flex flex-col w-full h-full px-4', className])}>{children}</div>
  );
};
