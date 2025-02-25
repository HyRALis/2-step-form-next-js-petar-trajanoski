'use client';

import React from 'react';

interface UseDelayFocusInputConfig {
    delayAmountMs?: number;
    focusOnFirstRender?: boolean;
    activeTrigger?: boolean;
}

/**
 * Custom hook to manage delayed focus on an input element.
 *
 * @param {Object} config - Configuration object for the hook.
 * @param {number} [config.delayAmountMs=200] - The delay in milliseconds before focusing the input.
 * @param {boolean} [config.focusOnFirstRender=false] - Whether to focus the input on the first render.
 * @param {boolean} [config.activeTrigger=false] - Whether the focus action should be triggered.
 * @returns {Object} - An object containing a ref to be attached to the input element.
 */
export const useDelayFocusInput = ({
    delayAmountMs = 200,
    focusOnFirstRender = false,
    activeTrigger = false
}: UseDelayFocusInputConfig) => {
    const [hasRendered, setHasRendered] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        if (!focusOnFirstRender && !hasRendered) {
            setHasRendered(true);
            return;
        }

        if (!activeTrigger) return;

        const timer = setTimeout(() => {
            inputRef.current?.focus();
        }, delayAmountMs);

        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [delayAmountMs, focusOnFirstRender, activeTrigger]);

    return { inputRef };
};
