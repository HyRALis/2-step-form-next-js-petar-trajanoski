'use client';

import React from 'react';

import { useEnhancedForm } from '@/context/features/forms/EnchancedFormProvider';
import {
  registrationFormSteps,
  RegistrationFormValues,
} from '@/services/utils/schemas/registrationFormSchema';
import { tailwindMerge } from '@/services/utils/tailwindMerge';

import { Button } from '../../../general/atoms/Button';
import { Heading } from '../../../general/atoms/Heading';
import { Paragraph } from '../../../general/atoms/Paragraph';
import { Input } from '../molecules/Input';

export const PersonalInformationForm = () => {
  const { register, formState, currentStep, setCurrentStep, validateStep, clearErrors } =
    useEnhancedForm<RegistrationFormValues>();

  const handleOnContinueClick = React.useCallback(async () => {
    if (!currentStep) return;

    console.log('Continue clicked for step:', currentStep);

    const isValid = await validateStep(currentStep);

    if (isValid) {
      const currentIndex = registrationFormSteps.findIndex((step) => step.name === currentStep);
      if (currentIndex < registrationFormSteps.length - 1) {
        const nextStep = registrationFormSteps[currentIndex + 1];

        console.log({ errors: formState.errors });

        for (let i = currentIndex + 1; i < registrationFormSteps.length; i++) {
          const step = registrationFormSteps[i];
          step.fields.forEach((field) => clearErrors(field));
        }

        setCurrentStep(nextStep.name);
      }
    } else {
      // Validation failed, errors will be displayed automatically
      console.log('Validation failed for step:', currentStep);
    }
  }, [currentStep, validateStep, setCurrentStep, clearErrors]);

  return (
    <div className={tailwindMerge(['flex flex-col w-full flex-shrink-0'])}>
      <div className="flex flex-col pt-6 space-y-4">
        <Heading text="Some introductions" />
        <Input
          label="First name"
          name="firstName"
          errorMessage={formState.errors?.firstName?.message ?? ''}
          placeholder="Your first name"
          register={register}
        />
        <Input
          label="Last name"
          name="lastName"
          errorMessage={formState.errors?.lastName?.message ?? ''}
          placeholder="Your last name"
          register={register}
        />
      </div>
      <div className="flex flex-col pt-6 space-y-2">
        <Button
          variant="primary"
          className="w-full"
          size="md"
          text="Continue"
          onClick={() => handleOnContinueClick()}
          aria-label="continue-to-step-2"
        />
        <Button
          variant="transparent"
          className="w-full"
          size="md"
          text="Already have an account?"
          aria-label="already-have-an-account"
        />
      </div>
      <Paragraph className="text-center mt-6 text-lightGray">Version 0.1</Paragraph>
    </div>
  );
};
