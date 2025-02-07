/**
 * Validates a phone number using an external API.
 *
 * @param prefix - The international dialing prefix for the phone number.
 * @param phone - The phone number to be validated.
 * @param code - The country code associated with the phone number.
 * @returns A promise that resolves to a boolean indicating whether the phone number is valid.
 *
 * This function constructs a URL with the provided phone number details and sends a request
 * to an external validation API. It returns true if the phone number is valid, otherwise false.
 * Logs an error message and returns false if the request fails.
 */
export const getValidateNumber = async (prefix: string, phone: string, code: string): Promise<boolean> => {
    const accessKey = process.env.NEXT_PUBLIC_VALIDATE_NUMBER_ACCESS_KEY;
    const phoneNumber = phone.split(' ').join('');
    const url = `https://apilayer.net/api/validate?access_key=${accessKey}&number=${phoneNumber}&country_code=${code}&format=1`;

    if (!accessKey) {
        console.error('Error fetching country data:', 'Invalid accessKey');
        return false;
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch countries: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        return data.valid;
    } catch (error) {
        console.error('Error fetching country data:', error);
        return false;
    }
};
