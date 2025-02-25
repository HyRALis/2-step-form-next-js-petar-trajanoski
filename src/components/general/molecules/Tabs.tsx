import React from 'react';

import { tailwindMerge } from '@/services/utils/tailwindMerge';

import { TabTag } from '../atoms/TabTag';

export interface TabsProps {
    tabs: number[];
    activeTab: number;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTab }) => {
    const determineVariant = (tab: number) => {
        if (tab === activeTab) return 'active';
        if (tab < activeTab) return 'finished';
        return 'default';
    };

    return (
        <div className="flex justify-center items-center space-x-[4px]">
            {tabs.map((tab, index) => {
                return (
                    <React.Fragment key={tab}>
                        {index !== 0 && <TabsSeparator isActive={tab <= activeTab} />}
                        <TabTag text={tab.toString()} variant={determineVariant(tab)} />
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export interface TabsSeparatorProps {
    isActive?: boolean;
}

const TabsSeparator: React.FC<TabsSeparatorProps> = ({ isActive }) => {
    return <div className={tailwindMerge(['w-1 h-1 bg-darkBlue12 rounded-full', isActive && 'bg-primary'])} />;
};
