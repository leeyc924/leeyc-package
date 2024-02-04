import React, { ElementType, ReactNode } from 'react';
import { PolymorphicComponentProps } from '@types';

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
    <Component {...(Component === 'button' && { type: 'button' })} {...otherProps}>
      {children}
    </Component>
  );
};

export default Button;
