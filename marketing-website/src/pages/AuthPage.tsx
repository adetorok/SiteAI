import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { debugLog, debugError, debugRender } from '../utils/debug';

interface LoginFormData {
  email: string;
  password: string;
}

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  siteName: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  [key: string]: string;
}

const AuthPage: React.FC = () => {
  // Debug component render
  debugRender('AuthPage');

  // State for error handling and loading
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Tab state
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

  // Form states
  const [loginFormData, setLoginFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });

  const [signUpFormData, setSignUpFormData] = useState<SignUpFormData>({
    firstName: '',
    lastName: '',
    email: '',
    siteName: '',
    password: '',
    confirmPassword: ''
  });

  const [loginErrors, setLoginErrors] = useState<FormErrors>({});
  const [signUpErrors, setSignUpErrors] = useState<FormErrors>({});

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const location = useLocation();

  // Component lifecycle and error handling
  useEffect(() => {
    try {
      debugLog('AuthPage component mounted');
      
      // Check URL hash for tab selection
      if (location.hash === '#signup') {
        setActiveTab('signup');
      } else if (location.hash === '#login') {
        setActiveTab('login');
      }

      // Simulate some initialization
      const initializeComponent = async () => {
        try {
          await new Promise(resolve => setTimeout(resolve, 100));
          setIsLoading(false);
          debugLog('AuthPage initialization complete');
        } catch (error) {
          debugError('Initialization error', error);
          setHasError(true);
          setErrorMessage('Failed to initialize component');
          setIsLoading(false);
        }
      };

      initializeComponent();
    } catch (error) {
      debugError('Component mount error', error);
      setHasError(true);
      setErrorMessage('Component failed to mount');
      setIsLoading(false);
    }

    return () => {
      debugLog('AuthPage component unmounting');
    };
  }, [location.hash]);

  // Form validation
  const validateLoginForm = (): boolean => {
    try {
      debugLog('Validating login form data', loginFormData);
      
      const errors: FormErrors = {};

      if (!loginFormData.email.trim()) {
        errors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginFormData.email)) {
        errors.email = 'Please enter a valid email address';
      }

      if (!loginFormData.password.trim()) {
        errors.password = 'Password is required';
      }

      setLoginErrors(errors);
      debugLog('Login form validation complete', { errors, isValid: Object.keys(errors).length === 0 });
      
      return Object.keys(errors).length === 0;
    } catch (error) {
      debugError('Login form validation error', error);
      return false;
    }
  };

  const validateSignUpForm = (): boolean => {
    try {
      debugLog('Validating signup form data', signUpFormData);
      
      const errors: FormErrors = {};

      if (!signUpFormData.firstName.trim()) {
        errors.firstName = 'First name is required';
      }

      if (!signUpFormData.lastName.trim()) {
        errors.lastName = 'Last name is required';
      }

      if (!signUpFormData.email.trim()) {
        errors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signUpFormData.email)) {
        errors.email = 'Please enter a valid email address';
      }

      if (!signUpFormData.siteName.trim()) {
        errors.siteName = 'Site/Organization name is required';
      }

      if (!signUpFormData.password.trim()) {
        errors.password = 'Password is required';
      } else if (signUpFormData.password.length < 8) {
        errors.password = 'Password must be at least 8 characters long';
      }

      if (!signUpFormData.confirmPassword.trim()) {
        errors.confirmPassword = 'Please confirm your password';
      } else if (signUpFormData.password !== signUpFormData.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
      }

      setSignUpErrors(errors);
      debugLog('Signup form validation complete', { errors, isValid: Object.keys(errors).length === 0 });
      
      return Object.keys(errors).length === 0;
    } catch (error) {
      debugError('Signup form validation error', error);
      return false;
    }
  };

  // Handle form submissions
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      debugLog('Login form submission started');
      
      if (!validateLoginForm()) {
        debugLog('Login form validation failed', loginErrors);
        return;
      }

      setIsSubmitting(true);
      debugLog('Submitting login form data', loginFormData);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Success - for now just log
      console.log('Login successful:', loginFormData);
      alert('Login functionality coming soon!');

    } catch (error) {
      debugError('Login form submission error', error);
      setLoginErrors({ submit: 'Failed to submit login form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignUpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      debugLog('Signup form submission started');
      
      if (!validateSignUpForm()) {
        debugLog('Signup form validation failed', signUpErrors);
        return;
      }

      setIsSubmitting(true);
      debugLog('Submitting signup form data', signUpFormData);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Success - for now just log
      console.log('Signup successful:', signUpFormData);
      alert('Signup functionality coming soon!');

    } catch (error) {
      debugError('Signup form submission error', error);
      setSignUpErrors({ submit: 'Failed to submit signup form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input changes
  const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const { name, value } = e.target;
      debugLog('Login input change', { name, value });
      
      setLoginFormData(prev => ({
        ...prev,
        [name]: value
      }));

      // Clear error when user starts typing
      if (loginErrors[name]) {
        setLoginErrors(prev => ({
          ...prev,
          [name]: ''
        }));
      }
    } catch (error) {
      debugError('Login input change error', error);
    }
  };

  const handleSignUpInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const { name, value } = e.target;
      debugLog('Signup input change', { name, value });
      
      setSignUpFormData(prev => ({
        ...prev,
        [name]: value
      }));

      // Clear error when user starts typing
      if (signUpErrors[name]) {
        setSignUpErrors(prev => ({
          ...prev,
          [name]: ''
        }));
      }
    } catch (error) {
      debugError('Signup input change error', error);
    }
  };

  // Tab switching
  const switchTab = (tab: 'login' | 'signup') => {
    try {
      debugLog('Switching to tab', tab);
      setActiveTab(tab);
      
      // Update URL hash
      window.location.hash = tab;
      
      // Clear form errors when switching tabs
      setLoginErrors({});
      setSignUpErrors({});
    } catch (error) {
      debugError('Tab switch error', error);
    }
  };

  // Error state UI
  if (hasError) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
            <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Something went wrong
          </h2>
          <p className="text-gray-600 mb-4">
            {errorMessage || 'We encountered an error while loading the page.'}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-cursor-blue text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Loading state UI
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cursor-blue mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Authentication...</p>
        </div>
      </div>
    );
  }

  // Safe render function with error boundary
  const safeRender = () => {
    try {
      return (
        <div className="min-h-screen bg-gray-50">
          {/* Navigation */}
          <nav className="bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <Link to="/" className="text-2xl font-bold text-cursor-blue">
                    SiteAI
                  </Link>
                </div>
                <div className="hidden md:flex space-x-8">
                  <Link to="/" className="text-gray-600 hover:text-cursor-blue transition-colors">
                    Home
                  </Link>
                  <Link to="/features" className="text-gray-600 hover:text-cursor-blue transition-colors">
                    Features
                  </Link>
                  <Link to="/demo" className="text-gray-600 hover:text-cursor-blue transition-colors">
                    Demo
                  </Link>
                  <Link to="/auth" className="text-cursor-blue font-medium">
                    Login / Sign Up
                  </Link>
                </div>
                <div className="md:hidden">
                  <button className="text-gray-600 hover:text-cursor-blue">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
              {/* Header */}
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900">
                  Welcome to SiteAI
                </h1>
                <p className="mt-2 text-sm text-gray-600">
                  Sign in to your account or start your free trial
                </p>
              </div>

              {/* Tab Navigation */}
              <div className="flex rounded-lg bg-gray-100 p-1">
                <button
                  onClick={() => switchTab('login')}
                  className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                    activeTab === 'login'
                      ? 'bg-white text-cursor-blue shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => switchTab('signup')}
                  className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                    activeTab === 'signup'
                      ? 'bg-white text-cursor-blue shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Sign Up (Free Trial)
                </button>
              </div>

              {/* Forms */}
              <div className="bg-white py-8 px-6 shadow rounded-lg">
                {/* Login Form */}
                {activeTab === 'login' && (
                  <form onSubmit={handleLoginSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        id="login-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={loginFormData.email}
                        onChange={handleLoginInputChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cursor-blue ${
                          loginErrors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your email"
                      />
                      {loginErrors.email && (
                        <p className="mt-1 text-sm text-red-600">{loginErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                      </label>
                      <input
                        id="login-password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        value={loginFormData.password}
                        onChange={handleLoginInputChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cursor-blue ${
                          loginErrors.password ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your password"
                      />
                      {loginErrors.password && (
                        <p className="mt-1 text-sm text-red-600">{loginErrors.password}</p>
                      )}
                    </div>

                    {loginErrors.submit && (
                      <div className="bg-red-50 border border-red-200 rounded-md p-3">
                        <p className="text-sm text-red-600">{loginErrors.submit}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-cursor-blue text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-cursor-blue focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Signing In...
                        </div>
                      ) : (
                        'Sign In'
                      )}
                    </button>

                    <div className="text-center">
                      <button
                        type="button"
                        className="w-full bg-white text-gray-700 py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cursor-blue focus:ring-offset-2 transition-colors"
                        onClick={() => {
                          try {
                            debugLog('Continue with Google clicked');
                            alert('Google authentication coming soon!');
                          } catch (error) {
                            debugError('Google auth button click error', error);
                          }
                        }}
                      >
                        Continue with Google
                      </button>
                    </div>
                  </form>
                )}

                {/* Sign Up Form */}
                {activeTab === 'signup' && (
                  <form onSubmit={handleSignUpSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="signup-firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                          id="signup-firstName"
                          name="firstName"
                          type="text"
                          autoComplete="given-name"
                          required
                          value={signUpFormData.firstName}
                          onChange={handleSignUpInputChange}
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cursor-blue ${
                            signUpErrors.firstName ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="First name"
                        />
                        {signUpErrors.firstName && (
                          <p className="mt-1 text-sm text-red-600">{signUpErrors.firstName}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="signup-lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          id="signup-lastName"
                          name="lastName"
                          type="text"
                          autoComplete="family-name"
                          required
                          value={signUpFormData.lastName}
                          onChange={handleSignUpInputChange}
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cursor-blue ${
                            signUpErrors.lastName ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Last name"
                        />
                        {signUpErrors.lastName && (
                          <p className="mt-1 text-sm text-red-600">{signUpErrors.lastName}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        id="signup-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={signUpFormData.email}
                        onChange={handleSignUpInputChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cursor-blue ${
                          signUpErrors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your email"
                      />
                      {signUpErrors.email && (
                        <p className="mt-1 text-sm text-red-600">{signUpErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="signup-siteName" className="block text-sm font-medium text-gray-700 mb-2">
                        Site/Organization Name
                      </label>
                      <input
                        id="signup-siteName"
                        name="siteName"
                        type="text"
                        autoComplete="organization"
                        required
                        value={signUpFormData.siteName}
                        onChange={handleSignUpInputChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cursor-blue ${
                          signUpErrors.siteName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Your organization name"
                      />
                      {signUpErrors.siteName && (
                        <p className="mt-1 text-sm text-red-600">{signUpErrors.siteName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                      </label>
                      <input
                        id="signup-password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        required
                        value={signUpFormData.password}
                        onChange={handleSignUpInputChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cursor-blue ${
                          signUpErrors.password ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Create a password"
                      />
                      {signUpErrors.password && (
                        <p className="mt-1 text-sm text-red-600">{signUpErrors.password}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="signup-confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm Password
                      </label>
                      <input
                        id="signup-confirmPassword"
                        name="confirmPassword"
                        type="password"
                        autoComplete="new-password"
                        required
                        value={signUpFormData.confirmPassword}
                        onChange={handleSignUpInputChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cursor-blue ${
                          signUpErrors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Confirm your password"
                      />
                      {signUpErrors.confirmPassword && (
                        <p className="mt-1 text-sm text-red-600">{signUpErrors.confirmPassword}</p>
                      )}
                    </div>

                    {signUpErrors.submit && (
                      <div className="bg-red-50 border border-red-200 rounded-md p-3">
                        <p className="text-sm text-red-600">{signUpErrors.submit}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-cursor-blue text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-cursor-blue focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Creating Account...
                        </div>
                      ) : (
                        'Start Free Trial'
                      )}
                    </button>

                    <div className="text-center">
                      <button
                        type="button"
                        className="w-full bg-white text-gray-700 py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cursor-blue focus:ring-offset-2 transition-colors"
                        onClick={() => {
                          try {
                            debugLog('Continue with Google clicked');
                            alert('Google authentication coming soon!');
                          } catch (error) {
                            debugError('Google auth button click error', error);
                          }
                        }}
                      >
                        Continue with Google
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Footer Links */}
              <div className="text-center text-sm text-gray-600">
                <p>
                  By continuing, you agree to our{' '}
                  <Link to="/terms" className="text-cursor-blue hover:text-blue-700">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-cursor-blue hover:text-blue-700">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    } catch (error) {
      debugError('Render error in AuthPage', error);
      setHasError(true);
      setErrorMessage('Failed to render page content');
      return null;
    }
  };

  // Return the safe render result
  return safeRender();
};

export default AuthPage;
