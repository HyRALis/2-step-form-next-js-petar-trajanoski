'use client';

import React from 'react';
import { useTransition, animated, SpringConfig, } from '@react-spring/web';
import { ANIMATION_DURATION_MILLISECONDS } from '@/services/utils/constants';

type AnimationConfig = {
    from?: object;
    enter?: object;
    leave?: object;
    config?: SpringConfig;
    delay?: number;
};

type ConfigurableWrapperProps = {
    children: React.ReactNode;
    className?: string;
    isVisible?: boolean;
    animation?: AnimationConfig;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export const ConfigurableAnimationWrapper: React.FC<ConfigurableWrapperProps> = ({
    children,
    className = '',
    isVisible = false,
    animation = {}
}) => {
    const [isMounted, setIsMounted] = React.useState(false);
    const [shouldRender, setShouldRender] = React.useState(true);

    // Default animation settings
    const defaultAnimation: AnimationConfig = {
        from: { opacity: 0, transform: 'translateY(20px)' },
        enter: { opacity: 1, transform: 'translateY(0px)' },
        leave: { opacity: 0, transform: 'translateY(20px)' },
        config: { tension: 280, friction: 0, duration: ANIMATION_DURATION_MILLISECONDS },
        delay: 0
    };

    // Merge default with provided animation settings
    const animationSettings = { ...defaultAnimation, ...animation };

    React.useEffect(() => {
        // Delay to ensure hydration
        const timer = setTimeout(() => {
            setIsMounted(true);
        }, 10);

        return () => clearTimeout(timer);
    }, []);

    // Transitions configuration
    const transitions = useTransition(isMounted && isVisible, {
        from: animationSettings.from,
        enter: animationSettings.enter,
        leave: animationSettings.leave,
        config: animationSettings.config,
        delay: animationSettings.delay,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onDestroyed: (item: any) => {
            if (!isVisible && item) {
                const timer = setTimeout(() => {
                    setShouldRender(false);
                }, 2000 * 2);

                return () => clearTimeout(timer);
            } else if (isVisible) {
                setShouldRender(true);
            }
        }
    });

    React.useEffect(() => {console.log({shouldRender})}, [shouldRender]);

    if (!shouldRender) return null;

    return transitions((styles, item) => item && <animated.div style={styles} className={className}>{children}</animated.div>);
}
