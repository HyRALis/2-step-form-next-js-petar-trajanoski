'use client';

import React from 'react';

export const useDelayFocusInput = (delayAmountMs: number) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            inputRef.current?.focus();
        }, delayAmountMs);

        return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { inputRef };
};
