import React from 'react';
import { HeaderContainer } from '../atoms/HeaderContainer';
import { Button } from '../atoms/Button';
import { ArrowLeftIcon } from '@/assets/icons/ArrowLeftIcon';
import { LogoIcon } from '@/assets/icons/LogoIcon';

export interface HeaderProps {
    hasArrow?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ hasArrow }) => {
    return (
        <HeaderContainer>
            {hasArrow && <Button variant="icon" size="md" icon={<ArrowLeftIcon />} />}
            <div className="absolute flex items-center justify-center top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-primary">
                <LogoIcon />
            </div>
        </HeaderContainer>
    );
};
