'use client';

import React from 'react';

import { RegistrationPageContextProps, RegistrationPageProviderProps } from '@/types/features/forms/registrationPageContextTypes';

const RegistrationPageContext = React.createContext<RegistrationPageContextProps | undefined>(
  undefined,
);

export const RegistrationPageProvider = ({
  children,
  countries,
}: RegistrationPageProviderProps) => {
  const [tab, setTab] = React.useState<number>(0);

  return (
    <RegistrationPageContext.Provider value={{ tab, setTab, countries }}>
      {children}
    </RegistrationPageContext.Provider>
  );
};

export const useRegistrationPageContext = () => {
  const context = React.useContext(RegistrationPageContext);
  if (!context) {
    throw new Error('useRegistrationPageContext must be used within a RegistrationPageProvider');
  }
  return context;
};
