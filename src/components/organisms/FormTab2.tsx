import React from 'react';

import { AdditionalInfo } from './AdditionalInfo';
import { Heading } from '../ui/atoms/Heading';
import { Button } from '../ui/atoms/Button';
import { FormLabel } from '../ui/atoms/form/FormLabel';
import { FormInput } from '../ui/atoms/form/FormInput';
import { FormErrorMessage } from '../ui/atoms/form/FormErrorMessage';
import { FormDropdown } from './FormDropdown';

export const FormTab2 = () => {
    return (
        <>
            <div className="flex flex-col space-y-4 mb-6">
                <Heading text="Let's validate your number" />
                <div className="flex flex-col space-y-1 w-full">
                    <FormLabel text="Phone number" />
                    <div className="flex space-x-1 w-full">
                        <FormDropdown value="+44" />
                        <FormInput placeholder="07890 123456" className="placeholder:text-light" />
                    </div>
                    <FormErrorMessage errorMessage="This field is required" />
                </div>
            </div>
            <div className="flex flex-col">
                <AdditionalInfo />
                <Button variant="primary" className="w-full" size="md" text="Continue" />
            </div>
        </>
    );
};
