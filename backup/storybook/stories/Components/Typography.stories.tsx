import { Typography, TypographyProps } from '@components';
import { Meta, StoryObj } from '@storybook/react';

const story: Meta<TypographyProps> = {
  component: Typography,
  tags: ['autodocs'],
  parameters: {},
};

export default story;

export const Default: StoryObj<TypographyProps> = {
  args: {
    children: 'Typography',
  },
};
