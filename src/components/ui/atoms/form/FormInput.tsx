import { tailwindMerge } from '@/utils/tailwindMerge';
import React from 'react';

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    hasError?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({ hasError, type, className, ...rest }) => {
    const errorClasses = 'border-danger focus:border-danger';

    return (
        <input
            type={type}
            className={tailwindMerge([
                'py-4 px-6 w-full rounded-full border-2 border-darkBlue12 focus:border-primary bg-transparent',
                className,
                hasError && errorClasses
            ])}
            {...rest}
        />
    );
};
