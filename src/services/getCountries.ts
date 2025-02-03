import { ICountryPhonePrefix, ICountryResponse } from '@/types';

export const fetchCountries = async (): Promise<ICountryPhonePrefix[]> => {
    const url = 'https://restcountries.com/v3.1/all?fields=name,flags,idd';

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
