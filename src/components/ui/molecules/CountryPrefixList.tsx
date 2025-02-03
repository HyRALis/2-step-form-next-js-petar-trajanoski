'use client';

import React from 'react';

import { CountryPrefixListItem } from './CountryPrefixListItem';

import { fetchCountries } from '@/services/getCountries';
import { ICountryPhonePrefix } from '@/types';

export interface CountryPrefixList {
    onChange: (value: { prefix: string; name: string }) => void;
}

export const CountryPrefixList: React.FC<CountryPrefixList> = ({ onChange }) => {
    const [countries, setCountries] = React.useState<ICountryPhonePrefix[]>([]);

    React.useEffect(() => {
        const getCountries = async () => {
            const countries = await fetchCountries();
            setCountries(countries);
        };

        getCountries();
    }, []);

    return (
        <div className="flex flex-col">
            {countries &&
                countries.length > 0 &&
                countries.map((country) => (
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
