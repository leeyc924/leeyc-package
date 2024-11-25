import { CheckBox, CheckBoxProps } from '@components';
import { Meta, StoryObj } from '@storybook/react';

const story: Meta<CheckBoxProps> = {
  component: CheckBox,
  tags: ['autodocs'],
  parameters: {},
};

export default story;

export const Default: StoryObj<CheckBoxProps> = {
  args: {
    label: 'CheckBox',
  },
};
