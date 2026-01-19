import { StrictMode } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { ToastProvider } from './contexts/ToastContext';

// Root component that wraps the app with all providers
// vite-react-ssg handles routing internally, so no BrowserRouter needed
// Uses Outlet to render child routes (App layout and pages)
export default function Root() {
  return (
    <StrictMode>
      <ThemeProvider>
        <ToastProvider>
          <Outlet />
        </ToastProvider>
      </ThemeProvider>
    </StrictMode>
  );
}
