'use client';

import React from 'react';

import { Container } from '../ui/atoms/Container';
import { Tabs } from '../ui/molecules/Tabs';
import { PhoneNumberForm } from './PhoneNumberForm';
import { useUserContext } from '@/context/MainContext';
import { PersonalInformationForm } from './PersonalInformationForm';

export const FormContainer = () => {
    const {
        user: { tab }
    } = useUserContext();

    return (
        <Container className="pt-[72px] mb-6 h-full overflow-auto max-w-96 lg:max-w-2xl">
            <div className="flex justify-center items-center my-[9px]">
                <Tabs tabs={[1, 2]} />
            </div>
            {tab === 1 ? <PersonalInformationForm /> : <PhoneNumberForm />}
        </Container>
    );
};
