import { CircleTimesIcon } from '@/assets/icons/CircleTimesIcon';
import React from 'react';

export interface FormErrorMessageProps {
    errorMessage: string;
}

export const FormErrorMessage: React.FC<FormErrorMessageProps> = ({ errorMessage }) => {
    return (
        <div className="flex items-center space-x-[5px] text-danger text-sm leading-4">
            <CircleTimesIcon />
            <span>{errorMessage}</span>
        </div>
    );
};
