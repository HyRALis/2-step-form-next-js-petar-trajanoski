import React from 'react';
import { FormLabel } from '../atoms/form/FormLabel';
import { FormInput } from '../atoms/form/FormInput';
import { FormErrorMessage } from '../atoms/form/FormErrorMessage';

export interface InputProps {
    label: string;
    errorMessage?: string;
    type?: string;
    placeholder?: string;
}

export const Input: React.FC<InputProps> = ({ type = 'text', placeholder = 'Write here', label, errorMessage }) => {
    return (
        <div className="flex flex-col space-y-[4px]">
            <FormLabel text={label} />
            <FormInput hasError={!!errorMessage} type={type} placeholder={placeholder} />
            {errorMessage && <FormErrorMessage errorMessage={errorMessage} />}
        </div>
    );
};
