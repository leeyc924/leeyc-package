import { ReactNode } from 'react';
import * as styles from './index.css';

export interface TabsProps {
  children: ReactNode;
}

const Tabs = ({ children }: TabsProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default Tabs;
