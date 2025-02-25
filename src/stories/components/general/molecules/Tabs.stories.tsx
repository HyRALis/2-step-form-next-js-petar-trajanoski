import { Meta, StoryObj } from '@storybook/react';

import '@/app/globals.css';

import { Tabs } from '@/components/general/molecules/Tabs';

const meta = {
    title: 'Components/General/Molecules/Tabs',
    component: Tabs,
    argTypes: {
        tabs: {
            control: 'object',
            defaultValue: [1, 2, 3]
        },
        activeTab: { control: 'number' }
    }
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        tabs: [1, 2, 3],
        activeTab: 1
    }
};

export const SecondTabActive: Story = {
    args: {
        tabs: [1, 2, 3],
        activeTab: 2
    }
};

export const ThirdTabActive: Story = {
    args: {
        tabs: [1, 2, 3],
        activeTab: 3
    }
};
