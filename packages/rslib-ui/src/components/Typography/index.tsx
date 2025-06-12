'use client';

import type { ReactNode } from 'react';

interface TypographyProps {
  children?: ReactNode;
}

const Typography = ({ children }: TypographyProps) => {
  return <span className='text-blue-blue100'>{children}</span>;
};

export { Typography };
export type { TypographyProps };
