import React from 'react';

import { FormContainer } from '../features/forms/organisms/FormContainer';
import { Header } from '../general/molecules/Header';

export const RegisterPageWrapper = () => {
  return (
    <div className="flex flex-col flex-grow-0 flex-shrink-0 h-screen justify-center items-center font-[family-name:var(--font-hanken-grotesk)] text-darkBlue overflow-hidden">
      <Header />
      <FormContainer />
    </div>
  );
};
