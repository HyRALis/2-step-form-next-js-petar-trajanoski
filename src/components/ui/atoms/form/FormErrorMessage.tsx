import React from 'react';

import { CircleExclamationMark } from '@/assets/icons/CircleExclamationMark';

export interface FormErrorMessageProps {
    errorMessage: string;
}

export const FormErrorMessage: React.FC<FormErrorMessageProps> = ({ errorMessage }) => {
    return (
        <div className="flex items-center space-x-[5px] text-danger text-sm leading-4">
            <CircleExclamationMark />
            <span>{errorMessage}</span>
        </div>
    );
};
