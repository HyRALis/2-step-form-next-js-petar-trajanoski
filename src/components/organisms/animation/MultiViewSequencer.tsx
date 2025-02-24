'use client';

import React from 'react';
import { useTransition, animated, config } from '@react-spring/web';

type ViewSequencerProps = {
    views: {
        id: string;
        content: React.ReactNode;
    }[];
    currentViewId: string;

    transitionDuration?: number;
};

export const MultiViewSequencer: React.FC<ViewSequencerProps> = ({ views, currentViewId, transitionDuration = 500 }) => {
    // Current view state
    const [direction, setDirection] = React.useState<'forward' | 'backward'>('forward');
    const [isTransitioning, setIsTransitioning] = React.useState(false);

    // Get current view index
    const currentIndex = views.findIndex((view) => view.id === currentViewId);

    // Animation for transitioning between views
    const transitions = useTransition(currentViewId, {
        from: {
            opacity: 0,
            transform: direction === 'forward' ? 'translateX(100%)' : 'translateX(-100%)'
        },
        enter: {
            opacity: 1,
            transform: 'translateX(0%)'
        },
        leave: {
            opacity: 0,
            transform: direction === 'forward' ? 'translateX(-100%)' : 'translateX(100%)'
        },
        config: {
            ...config.gentle,
            duration: transitionDuration
        },
        onRest: () => {
            setIsTransitioning(false);
        }
    });

    // Navigate to a specific view
    const navigateToView = React.useCallback(
        (viewId: string) => {
            if (isTransitioning || viewId === currentViewId) return;

            const targetIndex = views.findIndex((view) => view.id === viewId);
            if (targetIndex === -1) return;

            setIsTransitioning(true);

            // Determine direction
            setDirection(targetIndex > currentIndex ? 'forward' : 'backward');

            // Set the new view
            // setCurrentViewId(viewId);
        },
        [currentViewId, currentIndex, views, isTransitioning]
    );

    React.useEffect(() => {
        navigateToView(currentViewId);
    }, [currentViewId, navigateToView]);

    return (
        <div className="relative overflow-hidden">
            <div className="relative min-h-[600px]">
                {transitions((style, item) => {
                    const view = views.find((v) => v.id === item);
                    return view ? (
                        <animated.div style={style} className="absolute top-0 left-0 w-full" >
                            {view.content}
                        </animated.div>
                    ) : null;
                })}
            </div>
        </div>
    );
}
