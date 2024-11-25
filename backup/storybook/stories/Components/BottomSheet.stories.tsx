import { BottomSheet, BottomSheetProps } from '@components';
import { Meta, StoryObj } from '@storybook/react';

const story: Meta<BottomSheetProps> = {
  component: BottomSheet,
  tags: ['autodocs'],
  parameters: {},
};

export default story;

export const Default: StoryObj<BottomSheetProps> = {
  args: {
    isOpen: true,
    title: 'title',
    subTitle: 'sub title',
    submitText: 'submit',
    onSubmit: () => console.log(),
    cancelText: 'cancel',
    onCancel: () => console.log(),
    onClose: () => console.log(),
    children: 'BottomSheet',
  },
};
