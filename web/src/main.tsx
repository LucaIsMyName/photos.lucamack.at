import { ViteReactSSG } from 'vite-react-ssg';
import './index.css';
import { routes } from './routes';

// Pre-render all static paths while letting React Router handle routing
export const createRoot = ViteReactSSG(
  {
    routes,
    basename: import.meta.env.BASE_URL,
  },
  ({ isClient }) => {
    // Setup function - runs on both server and client
    if (isClient) {
      // Client-only setup if needed
    }
  }
);
