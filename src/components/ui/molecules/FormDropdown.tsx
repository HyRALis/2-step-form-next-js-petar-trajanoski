'use client';

import React from 'react';

import { ChevronDownIcon } from '@/assets/icons/ChevronDownIcon';
import { Drawer } from '../atoms/Drawer';
import { SearchBar } from '../atoms/SearchBar';
import { Button } from '../atoms/Button';
import { TimesIcon } from '@/assets/icons/TimesIcon';

export interface FormDropdownProps {
    value: string;
}

export const FormDropdown: React.FC<FormDropdownProps> = ({ value }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <button
                className="flex items-center justify-between max-w-min space-x-3 flex-grow-0 flex-shrink-0 py-4 px-6 w-full rounded-full border-2 border-darkBlue12 focus:border-primary bg-transparent transition-all duration-200 ease-in-out"
                onClick={() => setIsOpen(true)}
            >
                <span>{value}</span>
                <ChevronDownIcon />
            </button>
            <FormDropdownDrawer isOpen={isOpen} />
        </>
    );
};

export interface FormDropdownDrawerProps {
    isOpen: boolean;
}

export const FormDropdownDrawer: React.FC<FormDropdownDrawerProps> = ({ isOpen }) => {
    return (
        <Drawer
            header={
                <div className="flex items-center justify-between space-x-2 py-2 pl-6 pr-2">
                    <SearchBar getSearchResults={(query) => console.log(query)} />
                    <Button variant="icon" icon={<TimesIcon />} />
                </div>
            }
            isOpen={isOpen}
        >
            hello there
        </Drawer>
    );
};
