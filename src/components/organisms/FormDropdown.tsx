'use client';

import React from 'react';

import { ChevronDownIcon } from '@/assets/icons/ChevronDownIcon';
import { FormDropdownDrawer } from '../ui/molecules/FormDropdownDrawer';
import { tailwindMerge } from '@/services/utils/tailwindMerge';
import { ANIMATION_DURATION } from '@/services/utils/constants';

export interface FormDropdownProps {
    value: string;
    hasError?: boolean;
}

export const FormDropdown: React.FC<FormDropdownProps> = ({ value, hasError }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [closeDrawer, setCloseDrawer] = React.useState(true);

    React.useEffect(() => {
        let timer: NodeJS.Timeout | null = null;

        if (isOpen) {
            setCloseDrawer(false);
        } else {
            timer = setTimeout(() => {
                setCloseDrawer(true);
            }, ANIMATION_DURATION - 50);
        }

        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [isOpen]);

    return (
        <>
            <button
                className={tailwindMerge([
                    'flex items-center justify-between max-w-min space-x-3 flex-grow-0 flex-shrink-0 py-4 px-6 w-full rounded-full border-2 border-darkBlue12 focus:border-primary focus:outline-none bg-transparent transition-all duration-200 ease-in-out',
                    hasError && 'border-danger'
                ])}
                onClick={() => setIsOpen(true)}
            >
                <span>{value}</span>
                <ChevronDownIcon />
            </button>
            {!closeDrawer && <FormDropdownDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />}
        </>
    );
};
