'use client';

import { ReactNode } from 'react';
import * as styles from './styles.css';

interface TypographyProps {
  children?: ReactNode;
}

const Typography = ({ children }: TypographyProps) => {
  return <span className={styles.root}>{children}</span>;
};

export { Typography };
export type { TypographyProps };
