'use client';

import React from 'react';

import { TimesIcon } from '@/assets/icons/TimesIcon';
import { CountryPrefixList } from '../../features/forms/molecules/CountryPrefixList';
import { useRegistrationFormContext } from '@/context/features/forms/RegistrationFormProvider';
import { useDelayFocusInput } from '@/services/hooks/features/forms/useDelayFocusInput';
import { ANIMATION_DURATION_MILLISECONDS } from '@/services/utils/constants';
import { Drawer } from '../atoms/Drawer';
import { HeaderContainer } from '../atoms/HeaderContainer';
import { SearchBar } from '../atoms/SearchBar';
import { Button } from '../atoms/Button';

export interface FormDropdownDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export const FormDropdownDrawer: React.FC<FormDropdownDrawerProps> = ({ isOpen, onClose }) => {
    const { setUser } = useRegistrationFormContext();
    const [searchQuery, setSearchQuery] = React.useState('');
    const { inputRef } = useDelayFocusInput({
        delayAmountMs: ANIMATION_DURATION_MILLISECONDS + 50,
        focusOnFirstRender: true,
        activeTrigger: true
    });

    const handleChange = ({ prefix, code }: { prefix: string; name: string; code: string }) => {
        setUser((prevUser) => ({ ...prevUser, prefix, code }));
        onClose();
    };

    return (
        <Drawer
            header={
                <HeaderContainer className="flex justify-between space-x-2 py-2 pl-6 pr-2 left-1/2 -translate-x-1/2 max-w-full md:max-w-96 lg:max-w-2xl">
                    <SearchBar ref={inputRef} getSearchResults={(query) => setSearchQuery(query)} />
                    <Button variant="icon" icon={<TimesIcon />} onClick={onClose} />
                </HeaderContainer>
            }
            isOpen={isOpen}
            setIsOpen={onClose}
        >
            <CountryPrefixList searchQuery={searchQuery} onChange={handleChange} />
        </Drawer>
    );
};
