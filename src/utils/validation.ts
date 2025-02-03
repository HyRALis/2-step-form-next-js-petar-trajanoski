/**
 * Check if a string is empty or contains only whitespace
 * @param str - The string to check
 * @returns boolean
 */
function isEmptyString(str: string): boolean {
    return !str.trim();
}

/**
 * Check if a string contains only letters and spaces
 * @param str - The string to check
 * @returns boolean
 */
function isAlphaWithSpaces(str: string): boolean {
    const alphaRegex = /^[A-Za-z\s]+$/;
    return alphaRegex.test(str.trim());
}

/**
 * Check if a string is a valid number after removing spaces
 * @param str - The string to check
 * @returns boolean
 */
function isNumericString(str: string): boolean {
    const sanitized = str.replace(/\s+/g, '');
    return !isNaN(Number(sanitized));
}

/**
 * Validate a text input field
 * @param text - The text to validate
 * @returns A string containing the validation error message if the text is invalid, or an empty string if the text is valid
 */
const textInputValidation = (text: string) => {
    if (isEmptyString(text)) {
        return 'This field is required';
    } else if (!isAlphaWithSpaces(text)) {
        return 'We only accept letters and spaces for names, no special characters';
    } else {
        return '';
    }
};

/**
 * Validate a phone number input field
 * @param phone - The phone number to validate
 * @returns A string containing the validation error message if the phone number is invalid, or an empty string if the phone number is valid
 */

const phoneInputValidation = (phone: string) => {
    if (isEmptyString(phone)) {
        return 'This field is required';
    } else if (!isNumericString(phone)) {
        return 'We only accept numbers for phone numbers, no special characters and letters';
    } else {
        return '';
    }
};

export { textInputValidation, phoneInputValidation };
