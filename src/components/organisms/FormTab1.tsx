import React from 'react';

import { Heading } from '../ui/atoms/Heading';
import { Input } from '../ui/molecules/Input';
import { Button } from '../ui/atoms/Button';
import { Paragraph } from '../ui/atoms/Paragraph';

export const FormTab1 = () => {
    return (
        <>
            <div className="flex flex-col py-6 space-y-4">
                <Heading text="Some introductions" />
                <Input label="First Name" errorMessage="This field is required" placeholder="Your first name" />
                <Input label="Last Name" placeholder="Your last name" />
            </div>
            <div className="flex flex-col py-6 space-y-2">
                <Button variant="primary" className="w-full" size="md" text="Continue" />
                <Button variant="transparent" className="w-full" size="md" text="Already have an account?" />
            </div>
            <Paragraph className="text-center mt-6">Version 0.1.0</Paragraph>
        </>
    );
};
