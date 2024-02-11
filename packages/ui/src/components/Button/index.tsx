import { ElementType, ReactNode } from 'react';
import { PolymorphicComponentProps } from '@types';
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

  return (
    <Component className={container} {...(Component === 'button' && { type: 'button' })} {...otherProps}>
      {children}
    </Component>
  );
};

export default Button;
