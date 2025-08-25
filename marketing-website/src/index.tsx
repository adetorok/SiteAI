import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Debug logging for development
if (process.env.NODE_ENV === 'development') {
  console.log('[DEBUG] Marketing website starting in development mode');
}

// Error handling for React rendering
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  if (process.env.NODE_ENV === 'development') {
    console.log('[DEBUG] Marketing website rendered successfully');
  }
} catch (error) {
  console.error('[ERROR] Failed to render marketing website:', error);
  
  // Fallback error display
  rootElement.innerHTML = `
    <div style="text-align: center; padding: 40px; font-family: Arial, sans-serif;">
      <h1 style="color: #dc2626;">Application Error</h1>
      <p>Failed to load the Cursor marketing website.</p>
      <p>Please refresh the page or contact support if the problem persists.</p>
      <button onclick="window.location.reload()" style="background: #2563eb; color: white; padding: 12px 24px; border: none; border-radius: 6px; cursor: pointer;">
        Refresh Page
      </button>
    </div>
  `;
}
