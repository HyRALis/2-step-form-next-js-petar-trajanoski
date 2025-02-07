import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges multiple classnames into a single string, using the same logic as
 * `clsx` and `tailwind-merge`.
 *
 * @param inputs - The classnames to merge.
 * @returns A single string containing the merged classnames.
 */
export function tailwindMerge(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
