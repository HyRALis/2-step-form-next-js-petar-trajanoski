import { tailwindMerge } from '@/services/utils/tailwindMerge';
import React from 'react';

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    hasError?: boolean;
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
    ({ hasError, type, className, ...rest }, ref) => {
        return (
            <input
                ref={ref}
                type={type}
                className={tailwindMerge([
                    'py-4 px-6 w-full font-light rounded-full border-2 border-darkBlue12 focus:border-primary focus:outline-none bg-transparent transition-all duration-200 ease-in-out',
                    className,
                    hasError && 'border-danger'
                ])}
                {...rest}
            />
        );
    }
);

FormInput.displayName = 'FormInput';
