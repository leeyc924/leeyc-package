import { Tabs, TabsProps } from '@components';
import { Meta, StoryObj } from '@storybook/react';

const story: Meta<TabsProps> = {
  component: Tabs,
  tags: ['autodocs'],
  parameters: {},
};

export default story;

export const Default: StoryObj<TabsProps> = {
  args: {
    children: 'Tabs',
  },
};
