import { SpringConfig } from '@react-spring/web';

export type AnimationPreset = {
    from: object;
    enter: object;
    leave: object;
    config?: SpringConfig;
    delay?: number;
};

// Animation presets
export const FADE = {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { tension: 280, friction: 20 }
};

export const SLIDE_UP = {
    from: { transform: 'translateY(100%)' },
    enter: { transform: 'translateY(0px)' },
    leave: { transform: 'translateY(500%)' },
    config: { tension: 280, friction: 20 }
};

export const SLIDE_DOWN = {
    from: { opacity: 0, transform: 'translateY(-30px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(-30px)' },
    config: { tension: 280, friction: 20 }
};

export const SLIDE_LEFT = {
    from: { opacity: 0, transform: 'translateX(30px)' },
    enter: { opacity: 1, transform: 'translateX(0px)' },
    leave: { opacity: 0, transform: 'translateX(30px)' },
    config: { tension: 280, friction: 20 }
};

export const SLIDE_RIGHT = {
    from: { opacity: 0, transform: 'translateX(-30px)' },
    enter: { opacity: 1, transform: 'translateX(0px)' },
    leave: { opacity: 0, transform: 'translateX(-30px)' },
    config: { tension: 280, friction: 20 }
};

export const SCALE = {
    from: { opacity: 0, transform: 'scale(0.9)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.9)' },
    config: { tension: 280, friction: 20 }
};

export const BOUNCE = {
    from: { opacity: 0, transform: 'scale(0.8)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.8)' },
    config: { tension: 400, friction: 15, mass: 1 }
};

export const SLOW = {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { tension: 100, friction: 30 }
};

export const FAST = {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { tension: 500, friction: 15 }
};
