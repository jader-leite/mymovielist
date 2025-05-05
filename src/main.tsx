import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './App.css';
import App from './App.tsx';
import { Provider } from './components/ui/provider';
import { Toaster } from './components/ui/toaster.tsx';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
}

createRoot(root).render(
  <StrictMode>
    <Provider>
      <App />
      <Toaster />
    </Provider>
  </StrictMode>,
);
