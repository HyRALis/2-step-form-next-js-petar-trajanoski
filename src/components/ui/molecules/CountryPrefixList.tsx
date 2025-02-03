'use client';

import React from 'react';

import { CountryPrefixListItem } from './CountryPrefixListItem';

import { fetchCountries } from '@/services/getCountries';
import { ICountryPhonePrefix } from '@/types';

export interface CountryPrefixList {
    searchQuery: string;
    onChange: (value: { prefix: string; name: string }) => void;
}

export const CountryPrefixList: React.FC<CountryPrefixList> = ({ searchQuery, onChange }) => {
    const [countries, setCountries] = React.useState<ICountryPhonePrefix[]>([]);
    const [countriesToDisplay, setCountriesToDisplay] = React.useState<ICountryPhonePrefix[]>([]);

    React.useEffect(() => {
        const getCountries = async () => {
            const countries = await fetchCountries();
            setCountries(countries);
        };

        getCountries();
    }, []);

    React.useEffect(() => {
        if (searchQuery && countries.length > 0) {
            const filteredCountries = countries.filter((country) =>
                country.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setCountriesToDisplay(filteredCountries);
        } else {
            setCountriesToDisplay(countries);
        }
    }, [searchQuery, countries]);

    return (
        <div className="flex flex-col pt-[72px]">
            {countriesToDisplay &&
                countriesToDisplay.length > 0 &&
                countriesToDisplay.map((country) => (
                    <CountryPrefixListItem
                        key={country.name}
                        name={country.name}
                        prefix={country.prefix}
                        src={country.flag}
                        onClick={() => onChange({ prefix: country.prefix, name: country.name })}
                    />
                ))}
        </div>
    );
};
