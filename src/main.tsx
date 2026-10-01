import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ErrorBoundary } from './components/ErrorBoundary.tsx';
import './index.css';

function initApp() {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    return;
  }
  if (!rootElement.hasAttribute('data-react-mounted')) {
    rootElement.setAttribute('data-react-mounted', 'true');
    createRoot(rootElement).render(
      <StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </StrictMode>
    );
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
