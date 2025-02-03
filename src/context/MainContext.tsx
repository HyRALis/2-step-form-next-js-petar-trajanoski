'use client';

import React from 'react';

import { ErrorState, UserContextProps, UserProps } from '@/types/mainContextTypes';

const defaultUser: UserProps = {
    tab: 1,
    firstName: '',
    lastName: '',
    prefix: '',
    phoneNumber: ''
};

const defaultErrors: ErrorState = {
    firstNameError: null,
    lastNameError: null,
    phoneNumberError: null
};

const UserContext = React.createContext<UserContextProps | undefined>(undefined);

interface UserProviderProps {
    children: React.ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
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
        console.log({ user });
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return <UserContext.Provider value={{ user, setUser, errors, setErrors }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
    const context = React.useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};
