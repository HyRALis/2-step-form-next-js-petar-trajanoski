'use client';

import React from 'react';

import { CountryPrefixListItem } from './CountryPrefixListItem';

import { fetchCountries } from '@/services/utils/data/getCountries';
import { ICountryPhonePrefix } from '@/types';
import { Divider } from '../atoms/Divider';
import { useUserContext } from '@/context/MainContext';

const pins = ['United Kingdom', 'Ireland', 'United States', 'Australia'];

export interface CountryPrefixList {
    searchQuery: string;
    onChange: (value: { prefix: string; name: string }) => void;
}

export const CountryPrefixList: React.FC<CountryPrefixList> = ({ searchQuery, onChange }) => {
    const [countries, setCountries] = React.useState<ICountryPhonePrefix[]>([]);
    const [pinnedCountries, setPinnedCountries] = React.useState<ICountryPhonePrefix[]>([]);
    const [notPinnedCountries, setNotPinnedCountries] = React.useState<ICountryPhonePrefix[]>([]);
    const [countriesToDisplay, setCountriesToDisplay] = React.useState<ICountryPhonePrefix[]>([]);
    const {
        user: { prefix }
    } = useUserContext();

    React.useEffect(() => {
        const getCountries = async () => {
            const countries = await fetchCountries();
            const pinned = countries.filter((country) => pins.includes(country.name));
            const nonPinned = countries.filter((country) => !pins.includes(country.name));

            setCountries(countries);
            setPinnedCountries(pinned);
            setNotPinnedCountries(nonPinned);
        };

        getCountries();
    }, []);

    React.useEffect(() => {
        if (countries.length > 0) {
            const sortedPinned = pins
                .map((pin) => pinnedCountries.find((country) => country.name === pin))
                .filter(Boolean);

            setPinnedCountries(sortedPinned as ICountryPhonePrefix[]);

            if (searchQuery) {
                const filteredCountries = countries.filter((country) =>
                    country.name.toLowerCase().includes(searchQuery.toLowerCase())
                );
                setCountriesToDisplay(filteredCountries);
            } else {
                setCountriesToDisplay(notPinnedCountries);
            }
        }
    }, [searchQuery, countries]);

    return (
        <div className="flex flex-col items-center pt-[72px] w-full overflow-hidden">
            <div className="flex flex-col items-center w-full overflow-y-auto">
                {pinnedCountries.length > 0 &&
                    searchQuery === '' &&
                    pinnedCountries.map((country) => (
                        <CountryPrefixListItem
                            key={country.name}
                            name={country.name}
                            prefix={country.prefix}
                            src={country.flag}
                            isActive={country.prefix === prefix}
                            onClick={() => onChange({ prefix: country.prefix, name: country.name })}
                        />
                    ))}
                <Divider />

                {countriesToDisplay.length > 0 && (
                    <div className="flex flex-col items-center w-full">
                        {countriesToDisplay.map((country) => (
                            <CountryPrefixListItem
                                key={country.name}
                                name={country.name}
                                prefix={country.prefix}
                                src={country.flag}
                                isActive={country.prefix === prefix}
                                onClick={() => onChange({ prefix: country.prefix, name: country.name })}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
