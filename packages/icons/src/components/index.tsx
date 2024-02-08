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
      {irName && <span>{irName}</span>}
    </i>
  );
};

export default Icon;
