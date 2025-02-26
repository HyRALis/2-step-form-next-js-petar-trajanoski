import { Meta, StoryObj } from '@storybook/react';

import { TabTag } from '@/components/general/atoms/TabTag';

const meta = {
    title: 'Components/General/Atoms/TabTag',
    component: TabTag,
    argTypes: {
        text: { control: 'text' },
        variant: { control: 'select', options: ['default', 'active', 'finished'] },
        onClick: { action: 'clicked' }
    }
} satisfies Meta<typeof TabTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: '10',
        variant: 'default'
    }
};

export const Active: Story = {
    args: {
        text: '1',
        variant: 'active'
    }
};

export const Finished: Story = {
    args: {
        text: '1',
        variant: 'finished',
    }
};
export const Clickable: Story = {
    args: {
        text: '1',
        variant: 'default',
        onClick: () => alert('Tab clicked!')
    }
};
