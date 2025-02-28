import React from 'react';

interface DesktopContainerProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

export const DesktopContainer: React.FC<DesktopContainerProps> = ({ children }) => {
  return <div className="w-full mx-auto max-w-[30rem] px-4">{children}</div>;
};
