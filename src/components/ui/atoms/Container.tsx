import { tailwindMerge } from '@/services/utils/tailwindMerge';
import React from 'react';

export interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return <div className={tailwindMerge(['flex flex-col w-full h-full md:px-6 px-4', className])}>{children}</div>;
};
