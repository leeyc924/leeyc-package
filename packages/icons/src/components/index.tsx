import { CSSProperties } from 'react';
import icons from '../constants';

export interface IconProps {
  name: (typeof icons)[number];
  size?: number;
  irName?: string;
  color?: CSSProperties['color'];
}

const Icon = ({ color = '#000', irName, name, size = 24 }: IconProps) => {
  return (
    <i
      className={`icon icon-${name}`}
      style={{
        fontSize: size,
        color,
      }}
    >
      {irName && (
        <span
          style={{
            position: 'absolute',
            overflow: 'hidden',
            width: '1px',
            height: '1px',
            border: 0,
            clip: `rect(1px, 1px, 1px, 1px)`,
          }}
        >
          {irName}
        </span>
      )}
    </i>
  );
};

export default Icon;
