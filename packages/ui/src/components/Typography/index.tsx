'use client';

import { ReactNode } from 'react';
import * as styles from './styles.css';

interface TypographyProps {
  children?: ReactNode;
}

const Typography = ({}: TypographyProps) => {
  return <span className={styles.root}>typography</span>;
};

export default Typography;
