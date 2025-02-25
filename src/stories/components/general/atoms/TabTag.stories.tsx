import { Meta, StoryObj } from '@storybook/react';
import { TabTag } from '@/components/general/atoms/TabTag';

const meta = {
    title: 'Components/TabTag',
    component: TabTag,
    argTypes: {
        text: { control: 'text' },
        isActive: { control: 'boolean' },
        onClick: { action: 'clicked' }
    }
} satisfies Meta<typeof TabTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: '10',
        isActive: false
    }
};

export const Active: Story = {
    args: {
        text: '1',
        isActive: true
    }
};

export const Clickable: Story = {
    args: {
        text: '1',
        isActive: false,
        onClick: () => alert('Tab clicked!')
    }
};
