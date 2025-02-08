'use client';

import React from 'react';

import { TimesIcon } from '@/assets/icons/TimesIcon';
import { Button } from '../atoms/Button';
import { Drawer } from '../atoms/Drawer';
import { SearchBar } from '../atoms/SearchBar';
import { CountryPrefixList } from './CountryPrefixList';
import { HeaderContainer } from '../atoms/HeaderContainer';
import { useUserContext } from '@/context/MainContext';
import { useDelayFocusInput } from '@/services/hooks/useDelayFocusInput';
import { ANIMATION_DURATION } from '@/services/utils/constants';

export interface FormDropdownDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export const FormDropdownDrawer: React.FC<FormDropdownDrawerProps> = ({ isOpen, onClose }) => {
    const { setUser } = useUserContext();
    const [searchQuery, setSearchQuery] = React.useState('');
    const { inputRef } = useDelayFocusInput(ANIMATION_DURATION + 100);

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
