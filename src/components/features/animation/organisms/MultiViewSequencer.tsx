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
    initialMountAnimation?: boolean;
};

export const MultiViewSequencer: React.FC<ViewSequencerProps> = ({
    views,
    currentViewId,
    transitionDuration = 500,
    initialMountAnimation = true
}) => {
    const [direction, setDirection] = React.useState<'forward' | 'backward'>('forward');
    const [isTransitioning, setIsTransitioning] = React.useState(false);
    const [previousViewId, setPreviousViewId] = React.useState(currentViewId);

    const currentIndex = React.useMemo(
        () => views.findIndex((view) => view.id === currentViewId),
        [currentViewId, views]
    );
    const previousIndex = React.useMemo(
        () => views.findIndex((view) => view.id === previousViewId),
        [previousViewId, views]
    );

    const transitions = useTransition(currentViewId, {
        from: initialMountAnimation
            ? {
                  opacity: 0,
                  transform: direction === 'forward' ? 'translateX(100%)' : 'translateX(-100%)'
              }
            : {
                  opacity: 1,
                  transform: 'translateX(0%)'
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

    const navigateToView = React.useCallback(
        (viewId: string) => {
            if (isTransitioning || previousViewId === currentViewId) return;

            if (currentIndex === -1 || previousIndex === -1) return;

            setIsTransitioning(true);

            setDirection(previousIndex > currentIndex ? 'forward' : 'backward');

            setPreviousViewId(viewId);
        },
        [currentViewId, currentIndex, views, isTransitioning]
    );

    React.useEffect(() => {
        navigateToView(currentViewId);
    }, [currentViewId]);

    return (
        <div className="relative overflow-hidden">
            <div className="relative min-h-[600px]">
                {transitions((style, item) => {
                    const view = views.find((v) => v.id === item);
                    return view ? (
                        <animated.div style={style} className="absolute top-0 left-0 w-full">
                            {view.content}
                        </animated.div>
                    ) : null;
                })}
            </div>
        </div>
    );
};
