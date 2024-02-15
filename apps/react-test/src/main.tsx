import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@breadlee/ui';
import '@breadlee/ui/dist/css/index.css';
import App from './App';

const root = document.getElementById('root');

createRoot(root as HTMLElement).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
