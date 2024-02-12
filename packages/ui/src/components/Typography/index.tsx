import { ElementType, ReactNode, memo } from 'react';
import { PolymorphicComponentProps } from '@types';

type Tag = 'span' | 'p' | 'div' | 'li';
export interface TypographyProps {
  variant?: 'H1' | 'H2' | 'H3' | 'B1' | 'B2' | 'D1' | 'D2';
  color?: string;
  children: ReactNode;
}

const Typography = <T extends Tag = 'span'>({
  children,
  color = '#000',
  component,
  variant = 'B2',
  ...otherProps
}: PolymorphicComponentProps<T, TypographyProps>) => {
  const Component = (component || 'span') as ElementType;

  return <Component {...otherProps}>{children}</Component>;
};

Typography.displayName = 'Typography';

export default memo(Typography);
