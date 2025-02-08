'use client'

import { ANIMATION_DURATION } from '@/services/utils/constants';
import { useEffect, useRef } from 'react';
import { PropsWithChildren } from 'react';

interface FocusTrapProps extends React.HTMLAttributes<HTMLDivElement> {
    isActive: boolean;
    onDeactivate?: () => void;
}

export const FocusTrap = ({ isActive, onDeactivate, children, ...rest }: PropsWithChildren<FocusTrapProps>) => {
    const focusTrapRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!isActive || !focusTrapRef.current) return;

        const focusableElements = Array.from(
            focusTrapRef.current.querySelectorAll<HTMLElement>(
                'a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
            )
        ).filter((el) => !el.hasAttribute('disabled'));

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Tab') {
                if (focusableElements.length === 1) {
                    event.preventDefault();
                    return;
                }

                if (event.shiftKey && document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                } else if (!event.shiftKey && document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }

            if (event.key === 'Escape' && onDeactivate) {
                onDeactivate();
            }
        };

        const trapFocus = () => {
            firstElement.focus();
        };

        document.addEventListener('keydown', handleKeyDown);

        const timer = setTimeout(() => {
            trapFocus();
        }, ANIMATION_DURATION + 100);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            clearTimeout(timer);
        };
    }, [isActive, onDeactivate]);

    return (
        <div ref={focusTrapRef} {...rest}>
            {children}
        </div>
    );
};

export default FocusTrap;
