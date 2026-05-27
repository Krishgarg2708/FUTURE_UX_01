import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Global error overlay to inspect runtime failures during development
if (typeof window !== 'undefined') {
  const handleError = (msg: string, url: string, line: number, col: number, error?: Error) => {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
    overlay.style.color = '#f8fafc';
    overlay.style.fontFamily = 'monospace';
    overlay.style.padding = '2rem';
    overlay.style.zIndex = '99999';
    overlay.style.boxSizing = 'border-box';
    overlay.style.overflow = 'auto';

    overlay.innerHTML = `
      <div style="max-width: 800px; margin: 0 auto; background: #1e293b; padding: 2rem; border-radius: 8px; border: 1px solid #ef4444; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);">
        <h1 style="color: #ef4444; font-size: 1.5rem; margin-top: 0; margin-bottom: 1rem; border-bottom: 1px solid #334155; padding-bottom: 0.5rem;">🚨 Runtime Error Occurred</h1>
        <p style="font-weight: bold; font-size: 1.1rem; color: #f1f5f9; margin-bottom: 1rem;">${msg}</p>
        <p style="color: #94a3b8; font-size: 0.9rem;">File: ${url}:${line}:${col}</p>
        ${error && error.stack ? `
          <h2 style="font-size: 1.1rem; margin-top: 1.5rem; margin-bottom: 0.5rem; color: #38bdf8;">Stack Trace:</h2>
          <pre style="background: #0f172a; padding: 1rem; border-radius: 4px; overflow-x: auto; font-size: 0.85rem; color: #cbd5e1; border: 1px solid #1e293b; white-space: pre-wrap;">${error.stack}</pre>
        ` : ''}
        <button style="margin-top: 1.5rem; padding: 0.5rem 1rem; background: #ef4444; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;" onclick="window.location.reload(true)">Reload Page</button>
      </div>
    `;
    document.body.appendChild(overlay);
  };

  window.onerror = function (message, source, lineno, colno, error) {
    handleError(String(message), String(source), lineno || 0, colno || 0, error);
    return false;
  };

  window.addEventListener('unhandledrejection', function (event) {
    const error = event.reason instanceof Error ? event.reason : new Error(String(event.reason));
    handleError('Unhandled Promise Rejection: ' + error.message, '', 0, 0, error);
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

