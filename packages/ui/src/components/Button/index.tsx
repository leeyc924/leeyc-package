import { ElementType, ReactNode } from 'react';
import { PolymorphicComponentProps } from '@types';
import Typography from '../Typography';
import { container } from './index.css';

export interface ButtonProps {
  children: ReactNode;
}

const Button = <T extends ElementType = 'button'>({
  children,
  component,
  ...otherProps
}: PolymorphicComponentProps<T, ButtonProps>) => {
  const Component = component || 'button';

  if (component && !(otherProps.href || otherProps.to)) {
    throw new Error('anchor tag 또는 button tag 만 올수있습니다');
  }

  return (
    <Component className={container} {...(Component === 'button' && { type: 'button' })} {...otherProps}>
      {typeof children === 'string' ? <Typography>{children}</Typography> : children}
    </Component>
  );
};

export default Button;
