export interface UserProps {
    tab: 1 | 2;
    firstName: string;
    lastName: string;
    prefix: string;
    phoneNumber: string;
}

export interface ErrorState {
    firstNameError: string | null;
    lastNameError: string | null;
    phoneNumberError: string | null;
}

export interface UserContextProps {
    user: UserProps;
    setUser: React.Dispatch<React.SetStateAction<UserProps>>;
    errors: ErrorState;
    setErrors: React.Dispatch<React.SetStateAction<ErrorState>>;
}
