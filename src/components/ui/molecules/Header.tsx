'use client';

import React from 'react';
import { HeaderContainer } from '../atoms/HeaderContainer';
import { Button } from '../atoms/Button';
import { ArrowLeftIcon } from '@/assets/icons/ArrowLeftIcon';
import { LogoIcon } from '@/assets/icons/LogoIcon';
import { useUserContext } from '@/context/MainContext';

export const Header: React.FC = () => {
    const {
        user: { tab },
        setUser
    } = useUserContext();

    return (
        <HeaderContainer>
            {tab === 2 && (
                <Button
                    variant="icon"
                    size="md"
                    icon={<ArrowLeftIcon />}
                    onClick={() => setUser((prevUser) => ({ ...prevUser, tab: 1 }))}
                    aria-label="go-back"
                />
            )}
            <div className="absolute flex items-center justify-center top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-primary">
                <LogoIcon />
            </div>
        </HeaderContainer>
    );
};
