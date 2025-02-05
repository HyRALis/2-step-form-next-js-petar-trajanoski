import { tailwindMerge } from '@/utils/tailwindMerge';
import React from 'react';
import { createPortal } from 'react-dom';

export interface DrawerProps {
    children: React.ReactNode;
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    header?: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({ header, children, isOpen, setIsOpen }) => {
    const drawerContent = (
        <div
            className={tailwindMerge([
                'fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out backdrop-blur-xl',
                isOpen
                    ? 'transition-all opacity-100 duration-200 translate-y-0'
                    : 'transition-all delay-200 opacity-50 translate-y-full'
            ])}
        >
            <section
                className={tailwindMerge([
                    'w-full right-1/2 translate-x-1/2 absolute bg-background h-full shadow-xl delay-400 duration-200 ease-in-out transition-all transform max-w-96 lg:max-w-2xl',
                    isOpen ? 'translate-y-0' : 'translate-y-full'
                ])}
            >
                <div className="relative w-full pb-10 flex flex-col items-center overflow-y-scroll h-screen">
                    {header}
                    {children}
                </div>
            </section>
            <section
                className="w-screen h-full cursor-pointer"
                onClick={() => {
                    setIsOpen(false);
                }}
            ></section>
        </div>
    );

    return createPortal(drawerContent, document.body);
};

export default Drawer;
