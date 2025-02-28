import { PhoneNumberUtil } from 'google-libphonenumber';
import { z } from 'zod';

import { isAlphaWithSpaces } from '../validation';

const phoneUtil = PhoneNumberUtil.getInstance();

export const registrationFormPersonalInfoSchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .refine((value) => isAlphaWithSpaces(value.trim()), {
      message: 'We only accept letters and spaces for names, no special characters',
    }),
  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .refine((value) => isAlphaWithSpaces(value.trim()), {
      message: 'We only accept letters and spaces for names, no special characters',
    }),
});

export const registrationFormPhoneNumberSchema = z.object({
  prefix: z.string().optional(),
  phoneNumber: z
    .string()
    .nonempty('Phone number is required')
    .refine(
      (number) => {
        try {
          const phoneNumber = phoneUtil.parse(number);
          return phoneUtil.isValidNumber(phoneNumber);
        } catch {
          return false;
        }
      },
      { message: 'Invalid mobile number' },
    ),
});

export const registrationFormSchema = z.object({
  ...registrationFormPersonalInfoSchema.shape,
  ...registrationFormPhoneNumberSchema.shape,
})

export const registrationFormSteps: { name: string; fields: ('firstName' | 'lastName' | 'phoneNumber')[] }[] = [
  {
    name: 'personalInfo',
    fields: ['firstName', 'lastName'],
  },
  {
    name: 'phoneNumber',
    fields: ['phoneNumber'],
  },
];

export const registrationFormDefaultValues = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
};

export type RegistrationFormPersonalInfoValues = z.infer<typeof registrationFormPersonalInfoSchema>;
export type RegistrationFormPhoneNumberValues = z.infer<typeof registrationFormPhoneNumberSchema>;
export type RegistrationFormValues = z.infer<typeof registrationFormSchema>;