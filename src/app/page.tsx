import { RegisterPageWrapper } from '@/components/templates/RegisterPageWrapper';

import { RegistrationPageProvider } from '@/context/features/forms/RegistrationPageProvider';
import { fetchCountries } from '@/services/utils/data/getCountries';

export default async function Home() {
  const countries = await fetchCountries();

  return (
    <RegistrationPageProvider countries={countries}>
      <RegisterPageWrapper />
    </RegistrationPageProvider>
  );
}
