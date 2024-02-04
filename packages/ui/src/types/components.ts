import { ComponentPropsWithRef, ComponentPropsWithoutRef, ElementType } from 'react';

export type PolymorphicComponentProps<T extends ElementType, Props = Record<string, unknown>> = {
  component?: T;
} & ComponentPropsWithoutRef<T> &
  Props & {
    ref?: ComponentPropsWithRef<T>['ref'];
  };
