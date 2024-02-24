import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { classnames } from '@breadlee/utils';
import { palette, font } from '../../styles';
import * as styles from './index.css';

type Tag =
  | 'span'
  | 'p'
  | 'div'
  | 'ul'
  | 'li'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'strong'
  | 'em'
  | 'mark'
  | 'address'
  | 'label'
  | 'figcaption';
interface TypographyOwnProps {
  variant?: 'H1' | 'H2' | 'H3' | 'H4' | 'B1' | 'B2' | 'B3' | 'D1' | 'D2';
  weight?: 'bold' | 'medium' | 'regular';
  color?: keyof typeof palette;
  children: ReactNode;
  underline?: boolean;
  isEllipsisOneLine?: boolean;
  isEllipsisTwoLine?: boolean;
}

export type TypographyProps<E extends Tag = 'span'> = TypographyOwnProps &
  Omit<ComponentPropsWithoutRef<E>, keyof TypographyOwnProps> & { component?: E };

const Typography = <E extends Tag = 'span'>({
  children,
  color,
  component,
  isEllipsisOneLine,
  isEllipsisTwoLine,
  underline,
  variant = 'B2',
  weight = 'medium',
  ...otherProps
}: TypographyProps<E>) => {
  const Component = (component || 'span') as ElementType;

  return (
    <Component
      {...otherProps}
      style={{ ...otherProps.style, ...(color && { color: palette[color] }) }}
      className={classnames(styles.base, font.variant[variant], font.weight[weight], {
        [font.underline]: !!underline,
        [font.ellipsisOneLine]: !!isEllipsisOneLine,
        [font.ellipsisTwoLine]: !!isEllipsisTwoLine,
        [`${otherProps.className}`]: !!otherProps.className,
      })}
    >
      {children}
    </Component>
  );
};

export default Typography;
