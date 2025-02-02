import React from 'react';

export const HeaderContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className="flex justify-between items-center fixed top-0 left-0 z-10 w-full h-[72px] bg-background backdrop-blur-xl px-2 my-3">
            {children}
        </div>
    );
};
