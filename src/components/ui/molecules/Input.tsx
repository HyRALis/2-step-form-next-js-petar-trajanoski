import React from 'react';
import { FormLabel } from '../atoms/form/FormLabel';
import { FormInput } from '../atoms/form/FormInput';
import { FormErrorMessage } from '../atoms/form/FormErrorMessage';

export interface InputProps {
    label: string;
    errorMessage?: string;
    type?: string;
    placeholder?: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
    type = 'text',
    placeholder = 'Write here',
    value,
    label,
    errorMessage,
    onChange
}) => {
    return (
        <div className="flex flex-col space-y-[4px]">
            <FormLabel text={label} />
            <FormInput
                hasError={!!errorMessage}
                value={value}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            />
            {errorMessage && <FormErrorMessage errorMessage={errorMessage} />}
        </div>
    );
};
