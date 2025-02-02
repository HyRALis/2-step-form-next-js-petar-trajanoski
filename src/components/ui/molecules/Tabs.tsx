'use client';

import React, { Fragment } from 'react';
import { TabTag } from '../atoms/TabTag';

export interface TabsProps {
    tabs: string[];
}

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = React.useState(tabs[0]);

    return (
        <div className="flex justify-center items-center space-x-[4px]">
            {tabs.map((tab, index) => {
                return (
                    <Fragment key={tab}>
                        {index !== 0 && <TabsSeparator />}
                        <TabTag text={tab} isActive={activeTab === tab} onClick={() => setActiveTab(tab)} />
                    </Fragment>
                );
            })}
        </div>
    );
};

const TabsSeparator = () => {
    return <div className="w-1 h-1 bg-darkBlue4" />;
};
