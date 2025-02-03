import React from 'react';

import { FlagImage } from '../atoms/FlagImage';
import { ICountryPhonePrefix } from '@/types';
import { Paragraph } from '../atoms/Paragraph';

export interface FlagListItemProps extends Omit<ICountryPhonePrefix, 'flag'> {
    src: string;
    onClick: ({ name, prefix }: { name: string; prefix: string }) => void;
}

export const CountryPrefixListItem: React.FC<FlagListItemProps> = ({ name, prefix, src, onClick }) => {
    return (
        <li
            className="w-full flex items-center space-x-2 px-6 py-4 bg-transparent hover:bg-darkBlue4 cursor-pointer"
            onClick={() => onClick({ name, prefix })}
        >
            <div className="w-20 flex items-center space-x-2 flex-shrink-0 flex-grow-0">
                <FlagImage src={src} alt={name} />
                <Paragraph>{prefix}</Paragraph>
            </div>
            <Paragraph>{name}</Paragraph>
        </li>
    );
};
