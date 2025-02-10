import React, { ReactElement, ReactNode } from 'react';

interface DisableWrapperProps {
    disabled?: boolean;
    children: ReactNode;
    className?: string;
}

export const DisableWrapper: React.FC<DisableWrapperProps> = ({ disabled = false, children, className = '' }) => {
    return (
        <div
            className={className}
            style={{ pointerEvents: disabled ? 'none' : 'auto' }}
            aria-disabled={disabled}
        >
            {React.Children.map(children, (child) => {
                if (!React.isValidElement(child)) return child;
                
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const childElement = child as ReactElement<any>;
                return React.cloneElement(childElement, {
                    tabIndex: disabled ? -1 : childElement.props?.tabIndex,
                    'aria-disabled': disabled
                });
            })}
        </div>
    );
};