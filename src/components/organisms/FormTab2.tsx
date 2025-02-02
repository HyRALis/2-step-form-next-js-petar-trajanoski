import React from 'react';
import { AdditionalInfo } from './AdditionalInfo';
import { Input } from '../ui/molecules/Input';
import { Heading } from '../ui/atoms/Heading';

export const FormTab2 = () => {
    return (
        <>
            <Heading text="Let's validate your number" />
            <div className="flex space-y-1 w-full">
                <Input label="Phone number" errorMessage="This field is required" />
            </div>
            <AdditionalInfo />
        </>
    );
};
