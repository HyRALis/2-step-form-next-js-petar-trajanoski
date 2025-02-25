import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/general/atoms/Button';
import '@/app/globals.css';
import { ArrowLeftIcon } from '@/assets/icons/ArrowLeftIcon';
import { ChevronDownIcon } from '@/assets/icons/ChevronDownIcon';

const meta = {
    title: 'Components/General/Atoms/Button',
    component: Button,
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'transparent', 'disabled', 'icon']
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md']
        },
        isLoading: {
            control: 'boolean'
        },
        text: {
            control: 'text'
        },
        icon: {
            control: 'select',
            options: ['none', 'arrow-left', 'chevron-down'],
            mapping: {
                none: null,
                'arrow-left': <ArrowLeftIcon />,
                'chevron-down': <ChevronDownIcon />
            }
        }
    }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        text: 'Primary Button'
    }
};

export const SmallSize: Story = {
    args: {
        variant: 'primary',
        size: 'sm',
        text: 'Small Button'
    }
};

export const ExtraSmallSize: Story = {
    args: {
        variant: 'primary',
        size: 'xs',
        text: 'Extra small Button'
    }
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        size: 'md',
        text: 'Secondary Button'
    }
};

export const Transparent: Story = {
    args: {
        variant: 'transparent',
        size: 'md',
        text: 'Transparent Button'
    }
};

export const Disabled: Story = {
    args: {
        variant: 'disabled',
        size: 'md',
        text: 'Disabled Button',
        disabled: true
    }
};

export const IconButton: Story = {
    args: {
        variant: 'icon',
        size: 'md',
        icon: 'arrow-left'
    }
};

export const Loading = {
    args: {
        variant: 'primary',
        size: 'md',
        text: 'Loading Button',
        isLoading: true
    }
};


