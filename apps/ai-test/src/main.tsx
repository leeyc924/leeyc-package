import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@breadlee/icons/dist/icons.css';
import '@breadlee/icons/dist/icons.woff';

import App from './App';
import './reset.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
