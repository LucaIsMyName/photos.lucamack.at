import { useState, useEffect } from 'react';
/**
 * A hook for synchronizing React state with localStorage.
 * It supports complex data types by serializing/deserializing them as JSON.
 *
 * Use this for state that needs to persist across page reloads.
 *
 * Do NOT use this for:
 * - State that needs debouncing (use useDebouncedUrlState instead).
 * - Simple, immediate state changes that might conflict with other URL updates (use useSimpleUrlState instead).
 */

function useLocalStorageState<T>(key: string, defaultValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : defaultValue;
    } catch (error) {
      console.error(`Error reading localStorage key “${key}”:`, error);
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error(`Error setting localStorage key “${key}”:`, error);
    }
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorageState;
