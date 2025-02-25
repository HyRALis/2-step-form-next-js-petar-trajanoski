'use client';

import { useTransition, animated, SpringConfig } from '@react-spring/web';
import React, { useState, useEffect, useCallback } from 'react';

// Animation configuration type
type AnimationConfig = {
    from: object;
    enter: object;
    leave: object;
    config?: SpringConfig;
    delay?: number;
};

// Props for each individual animated component
type AnimatedComponentProps = {
    children: React.ReactNode;
    animation?: AnimationConfig;
    onAnimationComplete?: () => void;
    visible: boolean;
    id: string;
};

// Props for the sequence controller
type AnimationSequenceProps = {
    children: React.ReactNode[];
    initialDelay?: number;
    staggerDelay?: number;
    reverseOnExit?: boolean;
    exitDelay?: number;
    onSequenceComplete?: () => void;
    animations?: AnimationConfig[];
    showControls?: boolean;
};

// Default animation values
const defaultAnimation: AnimationConfig = {
    from: { opacity: 0, transform: 'translateY(20px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(20px)' },
    config: { tension: 280, friction: 20 },
    delay: 0
};

// Individual animated component
function AnimatedComponent({
    children,
    animation = defaultAnimation,
    onAnimationComplete,
    visible,
    id
}: AnimatedComponentProps) {
    const [shouldRender, setShouldRender] = useState(visible);

    // Combine default and custom animation
    const animConfig = { ...defaultAnimation, ...animation };

    // Set up the transition
    const transition = useTransition(visible, {
        from: animConfig.from,
        enter: animConfig.enter,
        leave: animConfig.leave,
        config: animConfig.config,
        delay: animConfig.delay,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onRest: (result: any) => {
            // When animation completes...
            if (result.finished) {
                // If this was an exit animation
                if (!visible) {
                    setShouldRender(false);
                }

                // Notify parent that animation is complete
                if (onAnimationComplete) {
                    onAnimationComplete();
                }
            }
        }
    });

    // Ensure component renders when it becomes visible
    useEffect(() => {
        if (visible) {
            setShouldRender(true);
        }
    }, [visible]);

    if (!shouldRender) return null;

    return transition(
        (styles, item) =>
            item && (
                <animated.div style={styles} data-animation-id={id}>
                    {children}
                </animated.div>
            )
    );
}

// Sequence controller component
export default function AnimationSequence({
    children,
    initialDelay = 0,
    staggerDelay = 200,
    reverseOnExit = false,
    exitDelay = 0,
    onSequenceComplete,
    animations = [],
    showControls = false
}: AnimationSequenceProps) {
    // Track which components are visible
    const [visibleComponents, setVisibleComponents] = useState<string[]>([]);

    // Track animation state
    const [isAnimating, setIsAnimating] = useState(false);
    const [sequenceComplete, setSequenceComplete] = useState(false);

    // For manual controls
    const [manualMode, setManualMode] = useState(false);

    // Create an array of component IDs for tracking
    const componentIds = React.Children.map(children, (_, i) => `component-${i}`);

    // Function to start the entrance animation sequence
    const startEntranceSequence = useCallback(() => {
        if (isAnimating) return;

        setIsAnimating(true);
        setSequenceComplete(false);

        // Clear all visible components first
        setVisibleComponents([]);

        // Function to add components one by one
        const animateNextComponent = (index: number) => {
            if (!componentIds || index >= componentIds.length) {
                setIsAnimating(false);
                setSequenceComplete(true);
                if (onSequenceComplete) onSequenceComplete();
                return;
            }

            // Show this component
            setVisibleComponents((prev) => [...prev, componentIds[index]]);

            // Manual mode requires explicit advancement
            if (!manualMode) {
                // Schedule the next component
                setTimeout(() => {
                    animateNextComponent(index + 1);
                }, staggerDelay);
            }
        };

        // Start the sequence after initial delay
        setTimeout(() => {
            animateNextComponent(0);
        }, initialDelay);
    }, [componentIds, initialDelay, staggerDelay, isAnimating, manualMode, onSequenceComplete]);

    // Function to start the exit animation sequence
    const startExitSequence = useCallback(() => {
        if (isAnimating) return;
        if (!componentIds) return;

        setIsAnimating(true);
        setSequenceComplete(false);
        
        // Determine the order of exit animations
        const exitOrder = [...componentIds];
        if (reverseOnExit) {
            exitOrder.reverse();
        }

        // Function to remove components one by one
        const animateNextExit = (index: number) => {
            if (index >= exitOrder.length) {
                setIsAnimating(false);
                setSequenceComplete(true);
                if (onSequenceComplete) onSequenceComplete();
                return;
            }

            // Hide this component
            setVisibleComponents((prev) => prev.filter((id) => id !== exitOrder[index]));

            // Manual mode requires explicit advancement
            if (!manualMode) {
                // Schedule the next component exit
                setTimeout(() => {
                    animateNextExit(index + 1);
                }, staggerDelay);
            }
        };

        // Start the exit sequence after delay
        setTimeout(() => {
            animateNextExit(0);
        }, exitDelay);
    }, [componentIds, exitDelay, staggerDelay, reverseOnExit, isAnimating, manualMode, onSequenceComplete]);

    // Function to handle animation completion of a component
    const handleAnimationComplete = (id: string) => {
        // This is where you can trigger the next animation in manual mode
        if (manualMode && componentIds) {
            const currentIndex = componentIds.indexOf(id);

            if (visibleComponents.includes(id)) {
                // This was an entrance animation
                if (currentIndex < componentIds.length - 1) {
                    // Show the next component
                    setVisibleComponents((prev) => [...prev, componentIds[currentIndex + 1]]);
                } else {
                    // Last component animated in
                    setIsAnimating(false);
                    setSequenceComplete(true);
                    if (onSequenceComplete) onSequenceComplete();
                }
            } else {
                // This was an exit animation
                const exitOrder = reverseOnExit ? [...componentIds].reverse() : componentIds;
                const currentExitIndex = exitOrder.indexOf(id);

                if (currentExitIndex < exitOrder.length - 1) {
                    // Hide the next component
                    setVisibleComponents((prev) => prev.filter((cid) => cid !== exitOrder[currentExitIndex + 1]));
                } else {
                    // Last component animated out
                    setIsAnimating(false);
                    setSequenceComplete(true);
                    if (onSequenceComplete) onSequenceComplete();
                }
            }
        }
    };

    // Auto-start entrance sequence on mount
    useEffect(() => {
        if (!manualMode) {
            startEntranceSequence();
        }
    }, [startEntranceSequence, manualMode]);

    // Render the components with their respective animations
    return (
        <div>
            {showControls && (
                <div className="mb-4 space-y-2">
                    <div className="flex space-x-2">
                        <button
                            onClick={startEntranceSequence}
                            disabled={isAnimating}
                            className="px-4 py-2 bg-green-500 text-white rounded disabled:bg-gray-300"
                        >
                            Start Entrance
                        </button>
                        <button
                            onClick={startExitSequence}
                            disabled={isAnimating || visibleComponents.length === 0}
                            className="px-4 py-2 bg-red-500 text-white rounded disabled:bg-gray-300"
                        >
                            Start Exit
                        </button>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="manual-mode"
                            checked={manualMode}
                            onChange={(e) => setManualMode(e.target.checked)}
                        />
                        <label htmlFor="manual-mode">Manual Animation Progression</label>
                    </div>
                    <div className="text-sm text-gray-600">
                        Status: {isAnimating ? 'Animating' : sequenceComplete ? 'Complete' : 'Ready'}
                    </div>
                </div>
            )}

            <div className="space-y-4">
                {componentIds && React.Children.map(children, (child, index) => {
                    const id = componentIds[index];
                    const isVisible = visibleComponents.includes(id);
                    const animationConfig = animations[index] || defaultAnimation;

                    return (
                        <AnimatedComponent
                            id={id}
                            visible={isVisible}
                            animation={animationConfig}
                            onAnimationComplete={() => handleAnimationComplete(id)}
                        >
                            {child}
                        </AnimatedComponent>
                    );
                })}
            </div>
        </div>
    );
}
