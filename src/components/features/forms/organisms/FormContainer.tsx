'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import { Container } from '@/components/general/atoms/Container';
import { DisableWrapper } from '@/components/general/atoms/DisableWrapper';

import { Tabs } from '@/components/general/molecules/Tabs';

import { EnhancedFormProvider } from '@/context/features/forms/EnchancedFormProvider';
import { useZodForm } from '@/services/hooks/features/forms/useZodForm';
import {
  registrationFormDefaultValues,
  registrationFormSchema,
  registrationFormSteps,
} from '@/services/utils/schemas/registrationFormSchema';

import { PersonalInformationForm } from './PersonalInformationForm';
import { PhoneNumberForm } from './PhoneNumberForm';
import { MultiViewSequencer } from '../../animation/organisms/MultiViewSequencer';

export const FormContainer = () => {
  const router = useRouter();

  const methods = useZodForm({
    schema: registrationFormSchema,
    defaultValues: registrationFormDefaultValues,
    steps: registrationFormSteps,
    reValidateMode: 'onChange',
    mode: 'all',
    onSubmit: (data) => {
      console.log('Form submitted with data:', data);
      methods.reset();
      localStorage.removeItem('user');
      router.push('/confirmation');
    },
  });

  const currentStepIndex = React.useMemo(() => {
    const index = registrationFormSteps.findIndex((step) => step.name === methods.currentStep);
    return index === -1 ? 0 : index + 1;
  }, [methods.currentStep]);

  React.useEffect(() => {
    const errors = methods.formState.errors;
    console.log({ errors });
  }, [methods.formState.errors]);

  return (
    <Container className="pt-[72px] mb-6 h-full max-w-96 lg:max-w-2xl overflow-hidden">
      <div className="flex justify-center items-center my-[9px]">
        <Tabs
          tabs={registrationFormSteps.map((step, index) => index + 1)}
          activeTab={currentStepIndex}
        />
      </div>
      <EnhancedFormProvider methods={methods}>
        <form onSubmit={methods.handleSubmit(() => {})}>
          <MultiViewSequencer
            views={[
              {
                id: '1',
                content: (
                  <DisableWrapper
                    disabled={currentStepIndex === 2}
                    className="flex w-full flex-shrink-0"
                  >
                    <PersonalInformationForm />
                  </DisableWrapper>
                ),
              },
              {
                id: '2',
                content: (
                  <DisableWrapper
                    disabled={currentStepIndex === 1}
                    className="flex w-full flex-shrink-0"
                  >
                    <PhoneNumberForm />
                  </DisableWrapper>
                ),
              },
            ]}
            currentViewId={currentStepIndex.toString()}
            transitionDuration={200}
          />
        </form>
      </EnhancedFormProvider>
    </Container>
  );
};
