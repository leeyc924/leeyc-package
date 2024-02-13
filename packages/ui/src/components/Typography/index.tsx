import { ElementType, ReactNode, memo } from 'react';
import { classnames } from '@breadlee/utils';
import { palette } from '@styles';
import { PolymorphicComponentProps } from '@types';
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

export interface TypographyProps {
  variant?: 'H1' | 'H2' | 'H3' | 'H4' | 'B1' | 'B2' | 'B3' | 'D1' | 'D2';
  weight?: 'bold' | 'medium' | 'regular';
  color?: keyof typeof palette;
  children: ReactNode;
  underline?: boolean;
  isEllipsisOneLine?: boolean;
  isEllipsisTwoLine?: boolean;
}

const Typography = <T extends Tag = 'span'>({
  children,
  color,
  component,
  isEllipsisOneLine,
  isEllipsisTwoLine,
  underline,
  variant = 'B2',
  weight = 'medium',
  ...otherProps
}: PolymorphicComponentProps<T, TypographyProps>) => {
  const Component = (component || 'span') as ElementType;

  return (
    <Component
      style={{ ...otherProps.style, ...(color && { color: palette[color] }) }}
      className={classnames(styles.base, styles.variant[variant], styles.weight[weight], {
        [styles.underline]: !!underline,
        [styles.ellipsisOneLine]: !!isEllipsisOneLine,
        [styles.ellipsisTwoLine]: !!isEllipsisTwoLine,
        ...(color && { [palette[color]]: !!color }),
      })}
      {...otherProps}
    >
      {children}
    </Component>
  );
};

Typography.displayName = 'Typography';

export default memo(Typography);
