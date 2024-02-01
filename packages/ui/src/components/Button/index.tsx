import React, { ComponentPropsWithRef, ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
}

type PolymorphicComponentProps<T extends ElementType, Props = Record<string, unknown>> = {
  component?: T;
} & ComponentPropsWithoutRef<T> &
  Props & {
    ref?: ComponentPropsWithRef<T>['ref'];
  };

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
