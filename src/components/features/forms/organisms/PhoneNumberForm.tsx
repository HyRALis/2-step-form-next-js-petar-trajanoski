'use client';

import React from 'react';

import { useEnhancedForm } from '@/context/features/forms/EnchancedFormProvider';
import { useDelayFocusInput } from '@/services/hooks/features/forms/useDelayFocusInput';
import { ANIMATION_DURATION_MILLISECONDS } from '@/services/utils/constants';
import { RegistrationFormValues } from '@/services/utils/schemas/registrationFormSchema';
import { tailwindMerge } from '@/services/utils/tailwindMerge';

import { FormDropdown } from './FormDropdown';
import { Button } from '../../../general/atoms/Button';
import { Heading } from '../../../general/atoms/Heading';
import { AdditionalInfo } from '../../../general/organisms/AdditionalInfo';
import { FormErrorMessage } from '../atoms/FormErrorMessage';
import { FormInput } from '../atoms/FormInput';
import { FormLabel } from '../atoms/FormLabel';

export const PhoneNumberForm: React.FC = () => {
  const [prefix, setPrefix] = React.useState<string>('+44');
  const [phoneNumber, setPhoneNumber] = React.useState<string>('');

  const {
    register,
    isSubmitting,
    setValue,
    clearErrors,
    formState: { errors },
  } = useEnhancedForm<RegistrationFormValues>();

  const { inputRef } = useDelayFocusInput({
    delayAmountMs: ANIMATION_DURATION_MILLISECONDS + 50,
    focusOnFirstRender: true,
    activeTrigger: true,
  });

  const fullPhoneNumber = React.useMemo(
    () => `${prefix}${phoneNumber.trim()}`,
    [prefix, phoneNumber],
  );

  React.useEffect(() => {
    register('phoneNumber');
    register('prefix');

    const timer = setTimeout(() => {
      clearErrors('phoneNumber');
    }, ANIMATION_DURATION_MILLISECONDS * 0.2);

    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    setValue('phoneNumber', fullPhoneNumber);
  }, [fullPhoneNumber, setValue]);

  React.useEffect(() => {
    setValue('prefix', prefix);
  }, [prefix, setValue]);

  return (
    <div className={tailwindMerge(['flex-col w-full flex-shrink-0'])}>
      <div className="flex flex-col space-y-4 py-6">
        <Heading text="Let's validate your number" />
        <div className="flex flex-col space-y-1 w-full">
          <FormLabel text="Phone number" htmlFor="phoneNumber" />
          <div className="flex space-x-1 w-full">
            <FormDropdown
              value={prefix}
              onChange={(prefix) => setPrefix(prefix)}
              hasError={!!errors?.phoneNumber?.message}
            />
            <FormInput
              ref={inputRef}
              id="phoneNumber"
              type="tel"
              placeholder="07890 123456"
              className="placeholder:text-light"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              hasError={!!errors?.phoneNumber?.message}
              aria-labelledby="phone-number"
            />
          </div>
          {errors.phoneNumber && (
            <FormErrorMessage errorMessage={errors?.phoneNumber?.message ?? ''} />
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <AdditionalInfo />
        <Button
          type="submit"
          isLoading={isSubmitting}
          variant={isSubmitting ? 'secondary' : 'primary'}
          disabled={isSubmitting}
          className="w-full"
          size="md"
          text="Continue"
          aria-label="continue"
          aria-disabled={isSubmitting}
        />
      </div>
    </div>
  );
};
