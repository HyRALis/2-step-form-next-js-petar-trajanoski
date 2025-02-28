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
  phoneNumber: z.string().nonempty('Phone number is required'),
});

export const registrationFormSchema = z
  .object({
    ...registrationFormPersonalInfoSchema.shape,
    ...registrationFormPhoneNumberSchema.shape,
  })
  .refine(
    ({ prefix, phoneNumber }) => {
      try {
        const fullPhoneNumber = phoneUtil.parse(`${prefix}${phoneNumber.trim()}`);
        return phoneUtil.isValidNumber(fullPhoneNumber);
      } catch {
        return false;
      }
    },
    { message: 'Invalid mobile number', path: ['fullPhoneNumber'] },
  );

export const registrationFormSteps: {
  name: string;
  fields: ('firstName' | 'lastName' | 'phoneNumber')[];
}[] = [
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
  prefix: '+44',
};

export type RegistrationFormPersonalInfoValues = z.infer<typeof registrationFormPersonalInfoSchema>;
export type RegistrationFormPhoneNumberValues = z.infer<typeof registrationFormPhoneNumberSchema>;
export type RegistrationFormValues = z.infer<typeof registrationFormSchema> & {
  fullPhoneNumber: string;
};