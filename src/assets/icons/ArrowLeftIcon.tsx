import { ISvgComponentProps } from '@/types';
import React from 'react';

export const GreenCircleWithCheckmark: React.FC<ISvgComponentProps> = ({ svgProps, pathProps }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14px"
            height="14px"
            viewBox="0 0 14 14"
            fill="none"
            {...svgProps}
        >
            <path
                d="M13.4166 6.41665H1.99143L7.4124 0.99575C7.64248 0.770307 7.64618 0.401024 7.42074 0.170952C7.19522 -0.0591205 6.82594 -0.0628946 6.59587 0.16262C6.59309 0.165326 6.59031 0.168103 6.58753 0.170952L0.170868 6.58762C-0.0569964 6.8152 -0.0573525 7.1842 0.170227 7.41206C0.169871 7.41206 0.17037 7.41227 0.170227 7.41206L6.58753 13.8291C6.81761 14.0545 7.18689 14.0508 7.41233 13.8208C7.63464 13.594 7.63464 13.231 7.41233 13.0042L1.99143 7.58332H13.4166C13.7388 7.58332 14 7.32213 14 6.99998C14 6.67784 13.7388 6.41665 13.4166 6.41665Z"
                fill="currentColor"
                {...pathProps}
            />
        </svg>
    );
};
