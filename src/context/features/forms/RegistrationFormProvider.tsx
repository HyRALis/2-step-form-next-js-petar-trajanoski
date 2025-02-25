'use client';

import React, { useCallback } from 'react';

import { ErrorState, RegistrationFormContextProps, UserProps } from '@/types/features/forms/mainContextTypes';

const defaultUser: UserProps = {
    tab: 1,
    firstName: '',
    lastName: '',
    code: 'GB',
    prefix: '+44',
    phoneNumber: ''
};

const defaultErrors: ErrorState = {
    firstNameError: null,
    lastNameError: null,
    phoneNumberError: null
};

const RegistrationFormContext = React.createContext<RegistrationFormContextProps | undefined>(undefined);

interface RegistrationFormProviderProps {
    children: React.ReactNode;
}

export const RegistrationFormProvider = ({ children }: RegistrationFormProviderProps) => {
    const [user, setUser] = React.useState<UserProps>(defaultUser);
    const [errors, setErrors] = React.useState<ErrorState>(defaultErrors);

    React.useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error('Failed to parse user data from local storage', error);
            }
        }
    }, []);

    React.useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    const resetUser = useCallback(() => setUser(defaultUser), []);

    return (
        <RegistrationFormContext.Provider value={{ user, setUser, errors, setErrors, resetUser }}>{children}</RegistrationFormContext.Provider>
    );
};

export const useRegistrationFormContext = () => {
    const context = React.useContext(RegistrationFormContext);
    if (!context) {
        throw new Error('useRegistrationFormContext must be used within a RegistrationFormProvider');
    }
    return context;
};
