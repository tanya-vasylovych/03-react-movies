import { createRoot } from 'react-dom/client';
import App from './components/App/App';
import { StrictMode } from 'react';
import './index.css';

import 'modern-normalize';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
