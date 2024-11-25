import { Modal, ModalProps } from '@components';
import { Meta, StoryObj } from '@storybook/react';

const story: Meta<ModalProps> = {
  component: Modal,
  tags: ['autodocs'],
  parameters: {},
};

export default story;

export const Default: StoryObj<ModalProps> = {
  args: {
    isOpen: true,
    title: 'title',
    subTitle: 'sub title',
    submitText: 'submit',
    onSubmit: () => console.log(),
    cancelText: 'cancel',
    onCancel: () => console.log(),
    onClose: () => console.log(),
    children: 'Modal',
  },
};
