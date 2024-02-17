import { ComponentPropsWithoutRef, ElementType, ReactNode, useMemo } from 'react';
import { classnames } from '@breadlee/utils';
import Typography, { TypographyProps } from '../Typography';
import * as styles from './index.css';

interface ButtonOwnProps {
  children: ReactNode;
  color?: 'primary' | 'secondary' | 'tertiary' | 'error';
  size?: 'xlarge' | 'large' | 'medium' | 'small';
  isFullWidth?: boolean;
  typographyProps?: Omit<TypographyProps, 'children'>;
}

export type ButtonProps<E extends ElementType = 'button'> = ButtonOwnProps &
  Omit<ComponentPropsWithoutRef<E>, keyof ButtonOwnProps> & { component?: E };

const Button = <E extends ElementType = 'button'>({
  children,
  color = 'primary',
  component,
  isFullWidth,
  size = 'medium',
  typographyProps,
  ...otherProps
}: ButtonProps<E>) => {
  const Component = component || 'button';

  if (component && !(otherProps.href || otherProps.to)) {
    throw new Error('anchor tag 또는 button tag 만 올수있습니다');
  }

  const defaultTypographyProps = useMemo<ButtonProps['typographyProps']>(() => {
    switch (size) {
      case 'xlarge':
        return {
          weight: 'regular',
          variant: 'B1',
        };
      case 'large':
        return {
          weight: 'regular',
          variant: 'B2',
        };
      case 'small':
        return {
          weight: 'regular',
          variant: 'D2',
        };
      default:
        return {
          weight: 'regular',
          variant: 'B2',
        };
    }
  }, [size]);

  return (
    <Component
      {...(Component === 'button' && { type: 'button' })}
      {...otherProps}
      className={classnames(styles.base, styles.color[color], styles.size[size], {
        [styles.fullWidth]: !!isFullWidth,
      })}
    >
      {typeof children === 'string' ? (
        <Typography {...defaultTypographyProps} {...typographyProps}>
          {children}
        </Typography>
      ) : (
        children
      )}
    </Component>
  );
};

export default Button;
