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
      <div style={{ display: 'flex', fontSize: '2rem', gap: 10 }}>
        {icons.map(icon => (
          <div key={icon} title={icon}>
            <Icon name={icon} />
          </div>
        ))}
      </div>
    );
  },
};
