import { tailwindMerge } from '@/utils/tailwindMerge';
import React from 'react';

export interface DrawerProps {
    children: React.ReactNode;
    isOpen: boolean;
    header?: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({ header, children, isOpen }) => {
    return (
        <div
            className={tailwindMerge([
                'fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out',
                isOpen
                    ? 'transition-opacity opacity-100 duration-200 translate-y-0'
                    : 'transition-all delay-500 opacity-0 translate-y-full'
            ])}
        >
            <section
                className={tailwindMerge([
                    'w-screen right-0 absolute bg-background h-full delay-400 duration-200 ease-in-out transition-all transform',
                    isOpen ? 'translate-y-0' : 'translate-y-full'
                ])}
            >
                <div className="relative w-screen pb-10 flex flex-col overflow-y-scroll h-screen">
                    {header}
                    {children}
                </div>
            </section>
        </div>
    );
};
