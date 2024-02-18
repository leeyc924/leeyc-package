import Icon, { IconProps } from '@icons';
import { Meta, StoryObj } from '@storybook/react';
import icons from '@icons/constants';

const story: Meta<IconProps> = {
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: 'Display icons',
      },
    },
  },
};

export default story;

export const Default: StoryObj = {
  render() {
    return (
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        {icons.map(icon => (
          <div key={icon} title={icon}>
            <Icon name={icon} />
          </div>
        ))}
      </div>
    );
  },
};
