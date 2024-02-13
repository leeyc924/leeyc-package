import { Button, ButtonProps } from '@components';
import { Meta, StoryObj } from '@storybook/react';

const story: Meta<ButtonProps> = {
  component: Button,
  tags: ['autodocs'],
  parameters: {},
};

export default story;

export const Default: StoryObj<ButtonProps> = {
  args: {
    children: '버튼명',
  },
};
