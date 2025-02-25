'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import { useRegistrationFormContext } from '@/context/features/forms/RegistrationFormProvider';
import { useDelayFocusInput } from '@/services/hooks/features/forms/useDelayFocusInput';
import { ANIMATION_DURATION_MILLISECONDS } from '@/services/utils/constants';
import { tailwindMerge } from '@/services/utils/tailwindMerge';
import { phoneInputValidation } from '@/services/utils/validation';

import { FormDropdown } from './FormDropdown';
import { Button } from '../../../general/atoms/Button';
import { Heading } from '../../../general/atoms/Heading';
import { AdditionalInfo } from '../../../general/organisms/AdditionalInfo';
import { FormErrorMessage } from '../atoms/FormErrorMessage';
import { FormInput } from '../atoms/FormInput';
import { FormLabel } from '../atoms/FormLabel';

export const PhoneNumberForm: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const {
    user,
    errors: { phoneNumberError },
    setUser,
    setErrors,
    resetUser,
  } = useRegistrationFormContext();
  const router = useRouter();
  const { inputRef } = useDelayFocusInput({
    delayAmountMs: ANIMATION_DURATION_MILLISECONDS + 50,
    focusOnFirstRender: true,
  });

  const handlePhoneNumberChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (phoneNumberError) {
        setErrors((prevErrors) => ({ ...prevErrors, phoneNumberError: null }));
      }
      setUser((prevUser) => ({ ...prevUser, phoneNumber: e.target.value }));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [phoneNumberError, user],
  );

  const handleContinueClick = React.useCallback(async () => {
    setIsLoading(true);

    const phoneNumberError = await phoneInputValidation(user.phoneNumber, user.prefix, user.code);

    setErrors((prevErrors) => ({ ...prevErrors, phoneNumberError }));

    setIsLoading(false);

    if (!phoneNumberError) {
      resetUser();
      localStorage.removeItem('user');
      router.push('/confirmation');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.phoneNumber, user.prefix, user.code]);

  return (
    <div className={tailwindMerge(['flex-col w-full flex-shrink-0'])}>
      <div className="flex flex-col space-y-4 py-6">
        <Heading text="Let's validate your number" />
        <div className="flex flex-col space-y-1 w-full">
          <FormLabel text="Phone number" htmlFor="phone-number" />
          <div className="flex space-x-1 w-full">
            <FormDropdown value={user.prefix} hasError={!!phoneNumberError} />
            <FormInput
              ref={inputRef}
              type="tel"
              placeholder="07890 123456"
              className="placeholder:text-light"
              value={user.phoneNumber}
              onChange={handlePhoneNumberChange}
              hasError={!!phoneNumberError}
              aria-labelledby="phone-number"
            />
          </div>
          {phoneNumberError && <FormErrorMessage errorMessage={phoneNumberError} />}
        </div>
      </div>
      <div className="flex flex-col">
        <AdditionalInfo />
        <Button
          isLoading={isLoading}
          variant={isLoading ? 'secondary' : 'primary'}
          disabled={isLoading}
          className="w-full"
          size="md"
          text="Continue"
          onClick={handleContinueClick}
          aria-label="continue"
          aria-disabled={isLoading}
        />
      </div>
    </div>
  );
};
