'use client';

import React from 'react';

import { Container } from '../ui/atoms/Container';
import { Tabs } from '../ui/molecules/Tabs';
import { PhoneNumberForm } from './PhoneNumberForm';
import { PersonalInformationForm } from './PersonalInformationForm';
import { useUserContext } from '@/context/MainContext';
import { DisableWrapper } from '../ui/atoms/DisableWrapper';
import { MultiViewSequencer } from './animation/MultiViewSequencer';

export const FormContainer = () => {
    const {
        user: { tab }
    } = useUserContext();

    return (
        <Container className="pt-[72px] mb-6 h-full max-w-96 lg:max-w-2xl overflow-hidden">
            <div className="flex justify-center items-center my-[9px]">
                <Tabs tabs={[1, 2]} />
            </div>
            <MultiViewSequencer
                views={[
                    {
                        id: '1',
                        content: (
                            <DisableWrapper disabled={tab === 2} className="flex w-full flex-shrink-0">
                                <PersonalInformationForm />
                            </DisableWrapper>
                        )
                    },
                    {
                        id: '2',
                        content: (
                            <DisableWrapper disabled={tab === 1} className="flex w-full flex-shrink-0">
                                <PhoneNumberForm isActive={tab === 2} />
                            </DisableWrapper>
                        )
                    }
                ]}
                currentViewId={tab.toString()}
                transitionDuration={200}
            />
        </Container>
    );
};
