import { ScreenOut, ScreenOutProps } from '@components';
import { Meta, StoryObj } from '@storybook/react';

const story: Meta<ScreenOutProps> = {
  component: ScreenOut,
  tags: ['autodocs'],
  parameters: {},
};

export default story;

export const Default: StoryObj<ScreenOutProps> = {
  args: {
    children: 'ScreenOut',
  },
};
