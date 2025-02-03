import React from 'react';

export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    text: string;
}

export const FormLabel: React.FC<FormLabelProps> = ({ text, ...rest }) => {
    return (
        <label className="text-xs leading-4 font-light" {...rest}>
            {text}
        </label>
    );
};
