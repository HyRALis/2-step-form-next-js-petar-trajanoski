'use client';

import React from 'react';

import { Container } from '../ui/atoms/Container';
import { Tabs } from '../ui/molecules/Tabs';
import { PhoneNumberForm } from './PhoneNumberForm';
import { PersonalInformationForm } from './PersonalInformationForm';
import { useUserContext } from '@/context/MainContext';
import { tailwindMerge } from '@/services/utils/tailwindMerge';
import { DisableWrapper } from '../ui/atoms/DisableWrapper';

export const FormContainer = () => {
    const {
        user: { tab }
    } = useUserContext();

    return (
        <Container className="pt-[72px] mb-6 h-full max-w-96 lg:max-w-2xl overflow-hidden">
            <div className="flex justify-center items-center my-[9px]">
                <Tabs tabs={[1, 2]} />
            </div>
            <div
                className={tailwindMerge([
                    'flex space-x-8 transform ease-in-out',
                    tab === 1 ? 'animate-slideInFromLeft' : 'animate-slideInFromRight'
                ])}
                style={{
                    animationFillMode: 'forwards',
                    WebkitAnimationFillMode: 'forwards',
                    MozAnimationFillMode: 'forwards'
                }}
            >
                <DisableWrapper disabled={tab === 2} className="flex w-full flex-shrink-0">
                    <PersonalInformationForm />
                </DisableWrapper>
                <DisableWrapper disabled={tab === 1} className="flex w-full flex-shrink-0">
                    <PhoneNumberForm isActive={tab === 2} />
                </DisableWrapper>
            </div>
        </Container>
    );
};
