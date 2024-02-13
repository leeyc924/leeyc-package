import { ElementType, ReactNode, useMemo } from 'react';
import { classnames } from '@breadlee/utils';
import { PolymorphicComponentProps } from '@types';
import Typography, { TypographyProps } from '../Typography';
import styles from './index.css';

export interface ButtonProps {
  children: ReactNode;
  color?: 'primary' | 'secondary' | 'tertiary' | 'error';
  size?: 'xlarge' | 'large' | 'medium' | 'small';
  isFullWidth?: boolean;
  typographyProps?: Omit<TypographyProps, 'children'>;
}

const Button = <T extends ElementType = 'button'>({
  children,
  color = 'primary',
  component,
  isFullWidth,
  size = 'medium',
  typographyProps,
  ...otherProps
}: PolymorphicComponentProps<T, ButtonProps>) => {
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
      className={classnames(styles.base, styles.color[color], styles.size[size], {
        [styles.fullWidth]: !!isFullWidth,
      })}
      {...(Component === 'button' && { type: 'button' })}
      {...otherProps}
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
