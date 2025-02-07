import { ICountryPhonePrefix, ICountryResponse } from '@/types';

/**
 * Fetches a list of countries and their phone prefixes, flags, and names.
 * 
 * @returns {Promise<ICountryPhonePrefix[]>} A promise that resolves to an array of country phone prefix objects,
 * each containing the country's name, flag URL, and phone prefix.
 * 
 * The function fetches data from the REST Countries API, sorts the countries by their common names,
 * and maps the data to include only the necessary fields: name, flag, and phone prefix. 
 * In case of an error during fetching or parsing, it logs the error and returns an empty array.
 */

export const fetchCountries = async (): Promise<ICountryPhonePrefix[]> => {
    const url = 'https://restcountries.com/v3.1/all?fields=name,flags,idd,cca2';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch countries: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        return data
            .sort((a: ICountryResponse, b: ICountryResponse) => a.name.common.localeCompare(b.name.common))
            .map(
                (country: ICountryResponse): ICountryPhonePrefix => ({
                    name: country.name?.common ?? 'Unknown',
                    flag: country.flags?.png ?? 'No flag available',
                    code: country.cca2 ?? 'No code',
                    prefix:
                        country?.idd?.root && country?.idd?.suffixes
                            ? `${country.idd.root}${country.idd.suffixes[0]}`
                            : country.idd.root ?? 'No prefix'
                })
            );
    } catch (error) {
        console.error('Error fetching country data:', error);
        return [];
    }
};
