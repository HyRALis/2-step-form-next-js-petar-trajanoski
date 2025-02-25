'use client';

import React from 'react';

import { useRegistrationFormContext } from '@/context/features/forms/RegistrationFormProvider';
import { TabTag } from '../atoms/TabTag';

export interface TabsProps {
    tabs: number[];
}

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const { user } = useRegistrationFormContext();

    return (
        <div className="flex justify-center items-center space-x-[4px]">
            {tabs.map((tab, index) => {
                return (
                    <React.Fragment key={tab}>
                        {index !== 0 && <TabsSeparator />}
                        <TabTag text={tab.toString()} isActive={user.tab === tab} />
                    </React.Fragment>
                );
            })}
        </div>
    );
};

const TabsSeparator = () => {
    return <div className="w-1 h-1 bg-darkBlue12 rounded-full" />;
};
