# Testing Documentation

This document provides information about the testing setup and how to write and run tests for the photos.lucamack.at project.

## Overview

This project uses Vitest and React Testing Library for testing components and utilities. The test setup is designed to make writing and running tests as straightforward as possible.

## Setup

The testing environment is configured with the following tools:

- **Vitest**: The test runner and assertion library (optimized for Vite projects)
- **React Testing Library**: For rendering and testing React components
- **@testing-library/jest-dom**: Provides custom DOM element matchers for assertions
- **jsdom**: Browser-like environment for testing

## Running Tests

You can run tests using the following npm scripts:

```bash
# Run all tests
npm test

# Run tests in watch mode (tests re-run when files change)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Test Structure

Tests are organized in the `src/__tests__` directory, mirroring the structure of the source code:

```
src/
├── __tests__/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── GalleryItem.test.tsx
│   │   │   └── HorizontalScroller.test.tsx
│   ├── utils/
│   │   ├── geocoding.test.ts
│   │   └── slugify.test.ts
│   ├── setup.ts  # Global test setup file
```

## Writing Tests

### Component Tests

For component tests, use React Testing Library to render components and interact with them. Here's a basic example:

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyComponent from '../components/MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
```

### Utility Tests

For utility functions, focus on testing input/output relationships:

```ts
import { describe, it, expect } from 'vitest';
import { myUtilityFunction } from '../utils/myUtility';

describe('myUtilityFunction', () => {
  it('returns expected output for given input', () => {
    expect(myUtilityFunction('input')).toBe('expected output');
  });
});
```

## Mocking

### Mocking Components

To mock a component that is used by the component under test:

```tsx
import { vi } from 'vitest';

vi.mock('../components/SomeComponent', () => ({
  default: ({ prop1, prop2 }) => <div data-testid="mocked-component">{prop1} {prop2}</div>
}));
```

### Mocking External APIs

For external APIs or browser APIs, use Vitest's mocking capabilities:

```ts
import { vi } from 'vitest';

vi.mock('@mapbox/mapbox-sdk/services/geocoding', () => {
  return vi.fn().mockImplementation(() => ({
    reverseGeocode: vi.fn().mockImplementation(() => ({
      send: vi.fn().mockResolvedValue({
        body: { features: [{ text: 'Mocked Country' }] }
      })
    }))
  }));
});
```

## Best Practices

1. **Test behavior, not implementation**: Focus on what the component does, not how it does it.
2. **Keep tests isolated**: Each test should be independent and not rely on the state from other tests.
3. **Use descriptive test names**: Make it clear what each test is checking.
4. **Mock external dependencies**: Don't rely on external services in unit tests.
5. **Test edge cases**: Consider empty states, error states, and boundary conditions.
6. **Use `beforeEach` for setup**: Reset mocks and test state between tests.

## Troubleshooting

### Common Issues

- **Tests failing with DOM-related errors**: Make sure you're using `cleanup` after tests that modify the DOM (this is handled automatically in our setup).
- **Mocks not working**: Ensure mocks are set up before the code that uses them is imported.
- **Async test failures**: Remember to use `async/await` or return promises for asynchronous tests.

### Debugging Tests

To debug tests, you can use:

```bash
# Run a specific test file
npm test src/__tests__/path/to/test.ts

# Run tests with a specific name pattern
npm test -- --testNamePattern="test name pattern"

# Debug tests in UI mode
npm test -- --ui
```

### Vitest UI Mode

Vitest offers a UI mode that makes debugging tests easier. Run it with:

```bash
npm test -- --ui
```

This opens a web interface where you can browse tests, see their output, and re-run them interactively.
