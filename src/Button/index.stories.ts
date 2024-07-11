import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button, { ButtonProps } from './index';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge'],
    },
    color: {
      control: 'select',
      options: ['Primary', 'Black'],
    },
    children: { control: 'text' },
    onClick: { action: fn() },
  },
} satisfies Meta<ButtonProps>;

type Story = StoryObj<ButtonProps>;

export const Large: Story = {
  args: {
    size: 'large',
    color: 'Primary',
    children: 'Large Button',
  },
};
