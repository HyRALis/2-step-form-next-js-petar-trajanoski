import React from 'react';

export interface FormLabelProps extends React.HTMLAttributes<HTMLLabelElement> {
    text: string;
}

export const FormLabel: React.FC<FormLabelProps> = ({ text, ...rest }) => {
    return (
        <label className="text-[12px] leading-[16px] font-light" {...rest}>
            {text}
        </label>
    );
};
