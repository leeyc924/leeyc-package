import { ReactNode, useEffect } from 'react';

export interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storageTheme = localStorage.getItem('theme');
    document.documentElement.setAttribute(
      'data-theme-mode',
      storageTheme === 'dark' ? 'dark' : storageTheme === 'light' ? 'light' : isDarkMode ? 'dark' : 'light',
    );
  }, []);

  return children;
};

export default ThemeProvider;
