import { Radio, RadioProps } from '@components';
import { Meta, StoryObj } from '@storybook/react';

const story: Meta<RadioProps> = {
  component: Radio,
  tags: ['autodocs'],
  parameters: {},
};

export default story;

export const Default: StoryObj<RadioProps> = {
  args: {
    label: 'Radio',
  },
};
