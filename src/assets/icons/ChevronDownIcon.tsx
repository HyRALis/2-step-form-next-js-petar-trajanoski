import { ISvgComponentProps } from '@/types';
import React from 'react';

export const ChevronDownIcon: React.FC<ISvgComponentProps> = ({ svgProps, pathProps }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none" {...svgProps}>
            <path
                d="M9.85343 0.658729C9.6616 0.460121 9.34507 0.454627 9.14646 0.646461L4.99998 4.79301L0.853431 0.646522C0.659706 0.459388 0.352516 0.459388 0.158729 0.646522C-0.0398794 0.838355 -0.0453726 1.15488 0.146461 1.35349L4.64646 5.85349C4.74009 5.94743 4.86735 6.00016 4.99998 5.99998C5.13261 6.0001 5.2598 5.94743 5.35343 5.85349L9.85343 1.35349C10.0406 1.15971 10.0406 0.852516 9.85343 0.658729Z"
                fill="currentColor"
                {...pathProps}
            />
        </svg>
    );
};
