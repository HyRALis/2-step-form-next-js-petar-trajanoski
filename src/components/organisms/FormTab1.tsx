'use client';

import React from 'react';

import { Heading } from '../ui/atoms/Heading';
import { Input } from '../ui/molecules/Input';
import { Button } from '../ui/atoms/Button';
import { Paragraph } from '../ui/atoms/Paragraph';
import { useUserContext } from '@/context/MainContext';
import { textInputValidation } from '@/utils/validation';

export const FormTab1 = () => {
    const {
        user,
        errors: { firstNameError, lastNameError },
        setUser,
        setErrors
    } = useUserContext();

    const handleFirstNameChange = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            if (firstNameError) {
                setErrors((prevErrors) => ({ ...prevErrors, firstNameError: null }));
            }
            setUser((prevUser) => ({ ...prevUser, firstName: e.target.value }));
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [firstNameError, user]
    );

    const handleLastNameChange = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            if (lastNameError) {
                setErrors((prevErrors) => ({ ...prevErrors, lastNameError: null }));
            }
            setUser((prevUser) => ({ ...prevUser, lastName: e.target.value }));
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [lastNameError, user]
    );

    const handleOnContinueClick = React.useCallback(() => {
        const firstNameError = textInputValidation(user.firstName);
        const lastNameError = textInputValidation(user.lastName);

        setErrors((prevErrors) => ({
            ...prevErrors,
            firstNameError,
            lastNameError
        }));

        if (!firstNameError && !lastNameError) {
            setUser((prevUser) => ({ ...prevUser, tab: 2 }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user.firstName, user.lastName]);

    return (
        <>
            <div className="flex flex-col pt-6 space-y-4">
                <Heading text="Some introductions" />
                <Input
                    label="First Name"
                    value={user.firstName}
                    errorMessage={firstNameError ?? ''}
                    placeholder="Your first name"
                    onChange={handleFirstNameChange}
                />
                <Input
                    label="Last Name"
                    value={user.lastName}
                    errorMessage={lastNameError ?? ''}
                    placeholder="Your last name"
                    onChange={handleLastNameChange}
                />
            </div>
            <div className="flex flex-col pt-6 space-y-2">
                <Button
                    variant="primary"
                    className="w-full"
                    size="md"
                    text="Continue"
                    onClick={handleOnContinueClick}
                />
                <Button variant="transparent" className="w-full" size="md" text="Already have an account?" />
            </div>
            <Paragraph className="text-center mt-6 text-lightGray">Version 0.1</Paragraph>
        </>
    );
};
