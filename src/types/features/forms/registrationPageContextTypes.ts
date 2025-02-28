import { ICountryPhonePrefix } from "@/types";

export interface RegistrationPageProviderProps {
  children: React.ReactNode;
  countries: ICountryPhonePrefix[];
}

export interface RegistrationPageContextProps {
    tab: number;
    setTab: (number: number) => void;
    countries: ICountryPhonePrefix[];
}
