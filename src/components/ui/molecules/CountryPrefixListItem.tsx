import React from 'react';

import { FlagImage } from '../atoms/FlagImage';
import { ICountryPhonePrefix } from '@/types';
import { Paragraph } from '../atoms/Paragraph';
import { tailwindMerge } from '@/services/utils/tailwindMerge';

export interface FlagListItemProps extends Omit<ICountryPhonePrefix, 'flag'> {
    src: string;
    onClick: ({ name, prefix, code }: { name: string; prefix: string; code: string }) => void;
    isActive?: boolean;
}

export const CountryPrefixListItem: React.FC<FlagListItemProps> = ({ name, prefix, code, src, onClick, isActive }) => {
    return (
        <li
            className={tailwindMerge([
                'w-full flex items-center space-x-2 px-6 py-4 cursor-pointer',
                isActive ? 'bg-darkBlue4' : 'bg-transparent'
            ])}
            onClick={() => onClick({ name, prefix, code })}
        >
            <div className="w-20 flex items-center space-x-2 flex-shrink-0 flex-grow-0">
                <FlagImage src={src} alt={name} />
                <Paragraph className="text-sm leading-6">{prefix}</Paragraph>
            </div>
            <Paragraph className="text-sm leading-6">{name}</Paragraph>
        </li>
    );
};
