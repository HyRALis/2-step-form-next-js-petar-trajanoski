import { ISvgComponentProps } from '@/types';
import React from 'react';

export const SearchIcon: React.FC<ISvgComponentProps> = ({ svgProps, pathProps }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            fill="none"
            {...svgProps}
        >
            <path
                d="M19.8595 19.1526L15.6976 14.9908C17.1227 13.3989 17.9975 11.3042 18 9C18 4.02942 13.9706 0 9 0C4.02942 0 0 4.02942 0 9C0 13.9706 4.02942 18 9 18C11.3041 17.9975 13.3989 17.1228 14.9907 15.6978L19.1525 19.8596C19.3463 20.0468 19.6534 20.0468 19.8472 19.8596C20.0458 19.6678 20.0513 19.3513 19.8595 19.1526ZM9 17C4.58173 17 1 13.4183 1 9C1 4.58173 4.58173 1 9 1C13.4162 1.00507 16.9949 4.5838 17 9C17 13.4183 13.4183 17 9 17Z"
                fill="currentColor"
                {...pathProps}
            />
        </svg>
    );
};
