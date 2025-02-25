'use client';

import React from 'react';

import { Container } from '@/components/general/atoms/Container';
import { DisableWrapper } from '@/components/general/atoms/DisableWrapper';

import { Tabs } from '@/components/general/molecules/Tabs';

import { useRegistrationFormContext } from '@/context/features/forms/RegistrationFormProvider';

import { PersonalInformationForm } from './PersonalInformationForm';
import { PhoneNumberForm } from './PhoneNumberForm';
import { MultiViewSequencer } from '../../animation/organisms/MultiViewSequencer';

export const FormContainer = () => {
    const {
        user: { tab }
    } = useRegistrationFormContext();

    return (
      <Container className="pt-[72px] mb-6 h-full max-w-96 lg:max-w-2xl overflow-hidden">
        <div className="flex justify-center items-center my-[9px]">
          <Tabs tabs={[1, 2]} activeTab={tab} />
        </div>
        <MultiViewSequencer
          views={[
            {
              id: '1',
              content: (
                <DisableWrapper disabled={tab === 2} className="flex w-full flex-shrink-0">
                  <PersonalInformationForm />
                </DisableWrapper>
              ),
            },
            {
              id: '2',
              content: (
                <DisableWrapper disabled={tab === 1} className="flex w-full flex-shrink-0">
                  <PhoneNumberForm />
                </DisableWrapper>
              ),
            },
          ]}
          currentViewId={tab.toString()}
          transitionDuration={200}
        />
      </Container>
    );
};
