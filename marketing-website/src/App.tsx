import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import MainLanding from './pages/MainLanding';
import SmokeTest from './components/SmokeTest';
import { debugLog, debugError } from './utils/debug';
import './App.css';

import FeaturesPage from './pages/FeaturesPage';

const DemoPage: React.FC = () => {
  try {
    debugLog('DemoPage component rendered');
    return (
      <div style={{ padding: 24 }}>
        <h1>Get Started with Cursor</h1>
        <p>Demo and trial signup coming soon...</p>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  } catch (error) {
    debugError('DemoPage render error', error);
    return <div>Error loading demo page</div>;
  }
};

const LoginPage: React.FC = () => {
  try {
    debugLog('LoginPage component rendered');
    return (
      <div style={{ padding: 24 }}>
        <h1>Login to Cursor</h1>
        <p>Login functionality coming soon...</p>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  } catch (error) {
    debugError('LoginPage render error', error);
    return <div>Error loading login page</div>;
  }
};

const App: React.FC = () => {
  try {
    debugLog('App component rendered');
    
    return (
      <ErrorBoundary>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<MainLanding />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/demo" element={<DemoPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
            {process.env.NODE_ENV === 'development' && <SmokeTest />}
          </div>
        </Router>
      </ErrorBoundary>
    );
  } catch (error) {
    debugError('App component render error', error);
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Application Error</h1>
          <p className="text-gray-600 mb-4">Something went wrong with the application.</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-cursor-blue text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Reload Application
          </button>
        </div>
      </div>
    );
  }
};

export default App;
