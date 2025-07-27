import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import PageComponent from '../../../components/pages/PageComponent';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

// Mock dependencies
vi.mock('../../../pages', () => ({
  pages: [
    {
      title: 'Test Page',
      slug: 'test-page',
      content: '# Test Page\nThis is a test page content.'
    },
    {
      title: 'About',
      slug: 'about',
      content: '# About\nAbout page content with some details.'
    }
  ]
}));

vi.mock('marked', () => ({
  marked: (content: string) => {
    // Simple mock for marked that converts markdown-like content to HTML
    if (content.startsWith('# ')) {
      const title = content.split('\n')[0].replace('# ', '');
      const rest = content.split('\n').slice(1).join('\n');
      return `<h1>${title}</h1><p>${rest}</p>`;
    }
    return `<p>${content}</p>`;
  }
}));

vi.mock('../../../components/pages/NotFoundPage', () => ({
  default: ({ title, text }: { title: string; text: string }) => (
    <div data-testid="not-found-page">
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  )
}));

// Mock ThemeContext
vi.mock('../../../contexts/ThemeContext', () => ({
  useTheme: () => ({ theme: 'light', toggleTheme: vi.fn() }),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}));

// Helper function to render component with necessary providers
const renderPageComponent = (slug: string) => {
  return render(
    <MemoryRouter initialEntries={[`/page/${slug}`]}>
      <Routes>
        <Route path="/page/:slug" element={<PageComponent />} />
      </Routes>
    </MemoryRouter>
  );
};

describe('PageComponent', () => {
  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks();
  });

  it('should render page content when a valid slug is provided', () => {
    renderPageComponent('test-page');
    
    // Check if the page content is rendered
    expect(screen.getByText('This is a test page content.')).toBeTruthy();
  });

  it('should render different page content for different slugs', () => {
    renderPageComponent('about');
    
    // Check if the about page content is rendered
    expect(screen.getByText('About page content with some details.')).toBeTruthy();
  });

  it('should render NotFoundPage when an invalid slug is provided', () => {
    renderPageComponent('non-existent-page');
    
    // Check if NotFoundPage is rendered
    expect(screen.getByTestId('not-found-page')).toBeTruthy();
    // Use queryByRole to get the heading element specifically
    expect(screen.getByRole('heading', { name: 'Seite nicht gefunden' })).toBeTruthy();
  });

  // We'll skip theme-specific tests since they're difficult to test with the current setup
  // and focus on the core functionality instead
});
