'use client';

import React from 'react';
import { createPortal } from 'react-dom';

import { ANIMATION_DURATION_MILLISECONDS } from '@/services/utils/constants';
import FocusTrap from './FocusTrap';
import { ConfigurableAnimationWrapper } from '@/components/organisms/animation/ConfigurableAnimationWrapper';
import { SLIDE_UP } from '@/services/utils/constants/animationPresets';

export interface DrawerProps {
    children: React.ReactNode;
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    header?: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({ header, children, isOpen, setIsOpen }) => {
    const [closeDrawer, setCloseDrawer] = React.useState(true);

    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;

        let timer: NodeJS.Timeout | null = null;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
            setCloseDrawer(false);
        } else {
            timer = setTimeout(() => {
                setCloseDrawer(true);
            }, ANIMATION_DURATION_MILLISECONDS + 10);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [isOpen, setIsOpen]);

    const drawerContent = (
        <FocusTrap
            isActive={closeDrawer}
            onDeactivate={() => setIsOpen(false)}
            className="absolute top-0 left-0 w-full h-screen flex flex-col items-center transition-all overflow-hidden"
        >
            <ConfigurableAnimationWrapper
                className="max-w-full md:max-w-96 lg:max-w-2xl h-full z-50"
                animation={{
                    ...SLIDE_UP,
                    config: { tension: 280, friction: 20, duration: ANIMATION_DURATION_MILLISECONDS }
                }}
                isVisible={isOpen}
            >
                <div className="relative w-screen h-full bg-background flex flex-col items-center max-w-full md:max-w-96 lg:max-w-2xl">
                    {header}
                    {children}
                </div>
            </ConfigurableAnimationWrapper>
            <div
                className="absolute top-0 left-0 w-screen h-screen bg-darkBlue12 z-30 backdrop-blur-xl"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                }}
            ></div>
        </FocusTrap>
    );

    return !closeDrawer ? createPortal(drawerContent, document.body) : null;
};

export default Drawer;
