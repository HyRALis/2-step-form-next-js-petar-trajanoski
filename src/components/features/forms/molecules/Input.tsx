import React from 'react';
import { UseFormRegister } from 'react-hook-form';

import { FormErrorMessage } from '../atoms/FormErrorMessage';
import { FormInput } from '../atoms/FormInput';
import { FormLabel } from '../atoms/FormLabel';

export interface InputProps {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>;
  errorMessage?: string;
  type?: string;
  placeholder?: string;
  value?: string | number;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = 'Write here',
  value,
  label,
  errorMessage,
  name,
  onChange,
  register,
}) => {
  return (
    <div className="flex flex-col space-y-[4px]">
      <FormLabel text={label} htmlFor={name} aria-label={name} />
      <FormInput
        {...(register ? register(name) : {})}
        id={name}
        hasError={!!errorMessage}
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        aria-labelledby={name}
      />
      {errorMessage && <FormErrorMessage errorMessage={errorMessage} />}
    </div>
  );
};
