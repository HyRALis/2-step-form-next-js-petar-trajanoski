'use client';

import React from 'react';

import { Container } from '../ui/atoms/Container';
import { Tabs } from '../ui/molecules/Tabs';
import { PhoneNumberForm } from './PhoneNumberForm';
import { PersonalInformationForm } from './PersonalInformationForm';
import { useUserContext } from '@/context/MainContext';
import { tailwindMerge } from '@/services/utils/tailwindMerge';

export const FormContainer = () => {
    const { user } = useUserContext();

    return (
        <Container className="pt-[72px] mb-6 h-full max-w-96 lg:max-w-2xl overflow-hidden">
            <div className="flex justify-center items-center my-[9px]">
                <Tabs tabs={[1, 2]} />
            </div>
            <div
                className={tailwindMerge([
                    'flex space-x-8 transform ease-in-out',
                    user.tab === 1 ? 'animate-slideInFromLeft' : 'animate-slideInFromRight'
                ])}
                style={{ animationFillMode: 'forwards' }}
            >
                <PersonalInformationForm />
                <PhoneNumberForm />
            </div>
        </Container>
    );
};
