import { ComponentPropsWithoutRef, ElementType, ReactNode, memo } from 'react';
import { classnames } from '@breadlee/utils';
import { palette } from '@styles';
import styles from './index.css';

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
      style={{ ...otherProps.style, ...(color && { color: palette[color] }) }}
      className={classnames(styles.base, styles.variant[variant], styles.weight[weight], {
        [styles.underline]: !!underline,
        [styles.ellipsisOneLine]: !!isEllipsisOneLine,
        [styles.ellipsisTwoLine]: !!isEllipsisTwoLine,
      })}
      {...otherProps}
    >
      {children}
    </Component>
  );
};

Typography.displayName = 'Typography';

export default memo(Typography);
