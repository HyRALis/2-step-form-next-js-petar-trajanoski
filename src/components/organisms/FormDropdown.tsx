'use client';

import React from 'react';

import { ChevronDownIcon } from '@/assets/icons/ChevronDownIcon';
import { FormDropdownDrawer } from '../ui/molecules/FormDropdownDrawer';
import { tailwindMerge } from '@/utils/tailwindMerge';

export interface FormDropdownProps {
    value: string;
    hasError?: boolean;
}

export const FormDropdown: React.FC<FormDropdownProps> = ({ value, hasError }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <button
                className={tailwindMerge([
                    'flex items-center justify-between max-w-min space-x-3 flex-grow-0 flex-shrink-0 py-4 px-6 w-full rounded-full border-2 border-darkBlue12 focus:border-primary bg-transparent transition-all duration-200 ease-in-out',
                    hasError && 'border-danger'
                ])}
                onClick={() => setIsOpen(true)}
            >
                <span>{value}</span>
                <ChevronDownIcon />
            </button>
            <FormDropdownDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
};
