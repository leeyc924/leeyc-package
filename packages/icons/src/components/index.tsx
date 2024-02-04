export interface IconProps {
  name: string;
  size?: number;
  irName?: string;
  color?: string;
}

const Icon = ({ color, irName, name, size }: IconProps) => {
  return <i className={name}>{irName && <span>{irName}</span>}</i>;
};

export default Icon;
