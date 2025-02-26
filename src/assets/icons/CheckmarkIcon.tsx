import React from 'react';

import { ISvgComponentProps } from '@/types';

export const CheckmarkIcon: React.FC<ISvgComponentProps> = ({ svgProps, pathProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="12"
      viewBox="0 0 17 12"
      fill="none"
      {...svgProps}
    >
      <path
        d="M16.324 0.544708C16.086 0.30186 15.6962 0.297951 15.4533 0.53599L5.8398 10.1495L1.54654 5.85626C1.30715 5.62161 0.924124 5.62161 0.684733 5.85626C0.441884 6.09422 0.437976 6.48402 0.675939 6.72686L5.40454 11.4555C5.51983 11.5711 5.67655 11.6361 5.83987 11.6358C6.0032 11.636 6.15984 11.5711 6.27514 11.4555L16.324 1.40659C16.5587 1.1672 16.5587 0.7841 16.324 0.544708Z"
        fill="currentColor"
        {...pathProps}
      />
    </svg>
  );
};
