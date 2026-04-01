// pages/NotFound.tsx
// The catch-all "*" route — shown when a user navigates to any unknown URL.
// Logs the attempted path to the console for debugging, then renders a
// simple 404 message with a link back to the home page.

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  // Log 404 errors so they appear in production error monitoring if connected.
  useEffect(() => {
    console.error('404 — User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
