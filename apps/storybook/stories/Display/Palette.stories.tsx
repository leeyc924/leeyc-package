import { Typography } from '@components';
import { Meta, StoryObj } from '@storybook/react';
import { palette } from '@styles';
import { useEffect, useRef, useState } from 'react';

interface PaletteProps {
  color?: keyof typeof palette;
}

const ColorItem = ({ className, name }: { name: string; className: string }) => {
  const [color, setColor] = useState<string>('');
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      const computedStyle = getComputedStyle(ref.current);
      const color = computedStyle.getPropertyValue('background-color');
      const regex = /(\d+), (\d+), (\d+)/;
      const match = color.match(regex);
      if (!match) return;

      const r = parseInt(match[1]).toString(16).padStart(2, '0').toUpperCase();
      const g = parseInt(match[2]).toString(16).padStart(2, '0').toUpperCase();
      const b = parseInt(match[3]).toString(16).padStart(2, '0').toUpperCase();

      setColor(`#${r}${g}${b}`);
    }
  }, [className]);

  return (
    <div key={name} style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 5 }}>
      <div
        ref={ref}
        style={{
          backgroundColor: className,
          width: '100%',
          height: '48px',
          boxShadow: 'rgba(0, 0, 0, 0.1) 0 1px 3px 0',
          border: '1px solid hsla(203, 50%, 30%, 0.15)',
        }}
      ></div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography color="Gray800" variant="D2">
          {name}
        </Typography>
        <Typography color="Gray800" variant="D2">
          {color}
        </Typography>
      </div>
    </div>
  );
};

const ColorItemList = ({ title }: { title: string }) => {
  const colors = Object.entries(palette).filter(([name]) => name.includes(title));

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '0 0 20%' }}>
        <Typography color="Gray900" variant="H4">
          {title}
        </Typography>
      </div>
      <div style={{ display: 'flex', flex: 1 }}>
        {colors.map(([name, className]) => (
          <ColorItem className={className} key={name} name={name} />
        ))}
      </div>
    </div>
  );
};

const Palette = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
      <ColorItemList title="Primary" />
      <ColorItemList title="Secondary" />
      <ColorItemList title="Tertiary" />
      <ColorItemList title="Error" />
      <ColorItemList title="Background" />
      <ColorItemList title="Surface" />
      <ColorItemList title="Outline" />
      <ColorItemList title="Blue" />
      <ColorItemList title="Gray" />
      <ColorItemList title="Black" />
      <ColorItemList title="White" />
    </div>
  );
};

const story: Meta<PaletteProps> = {
  component: Palette,
  parameters: {
    docs: {
      description: {
        component: 'Display palette',
      },
    },
  },
};

export default story;

export const Default: StoryObj = {
  render() {
    return <Palette />;
  },
};
