'use client';

import React from 'react';

import { useRegistrationPageContext } from '@/context/features/forms/RegistrationPageProvider';
import { ICountryPhonePrefix } from '@/types';

import { CountryPrefixListItem } from './CountryPrefixListItem';
import { Divider } from '../../../general/atoms/Divider';

const pins = ['United Kingdom', 'Ireland', 'United States', 'Australia'];

export interface CountryPrefixList {
  searchQuery: string;
  onChange: (value: { prefix: string; name: string; code: string }) => void;
}

export const CountryPrefixList: React.FC<CountryPrefixList> = ({ searchQuery, onChange }) => {
  const { countries } = useRegistrationPageContext();

  const [pinnedCountries, setPinnedCountries] = React.useState<ICountryPhonePrefix[]>(
    countries.filter((country) => pins.includes(country.name)),
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [notPinnedCountries, setNotPinnedCountries] = React.useState<ICountryPhonePrefix[]>(
    countries.filter((country) => !pins.includes(country.name)),
  );
  const [countriesToDisplay, setCountriesToDisplay] = React.useState<ICountryPhonePrefix[]>([]);

  React.useEffect(() => {
    if (!countries || countries.length === 0) return;

    const sortedPinned = pins
      .map((pin) => pinnedCountries.find((country) => country.name === pin))
      .filter(Boolean);

    setPinnedCountries(sortedPinned as ICountryPhonePrefix[]);

    if (searchQuery) {
      const filteredCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setCountriesToDisplay(filteredCountries);
    } else {
      setCountriesToDisplay(notPinnedCountries);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, countries]);

  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
      <div className="flex flex-col items-center w-full overflow-y-auto scrollbar">
        {pinnedCountries.length > 0 &&
          searchQuery === '' &&
          pinnedCountries.map((country) => (
            <CountryPrefixListItem
              key={country.name}
              name={country.name}
              prefix={country.prefix}
              code={country.code}
              src={country.flag}
              //   isActive={country.prefix === prefix}
              onClick={() =>
                onChange({ prefix: country.prefix, name: country.name, code: country.code })
              }
            />
          ))}

        {pinnedCountries.length > 0 && searchQuery === '' && <Divider />}

        {countriesToDisplay.length > 0 &&
          countriesToDisplay.map((country) => (
            <CountryPrefixListItem
              key={country.name}
              name={country.name}
              prefix={country.prefix}
              code={country.code}
              src={country.flag}
              //   isActive={country.prefix === prefix}
              onClick={() =>
                onChange({ prefix: country.prefix, name: country.name, code: country.code })
              }
            />
          ))}
      </div>
    </div>
  );
};
