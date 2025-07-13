import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

function useUrlState<T>(
  key: string,
  defaultValue: T
): [T, (newState: T) => void] {
  const [searchParams, setSearchParams] = useSearchParams();

  const getInitialState = useCallback((): T => {
    const urlValue = searchParams.get(key);
    if (urlValue !== null) {
      if (typeof defaultValue === "string") {
        return urlValue as T;
      }
      try {
        return JSON.parse(urlValue) as T;
      } catch {
        return urlValue as T;
      }
    }

    return defaultValue;
  }, [key, searchParams, defaultValue]);

  const [state, setState] = useState<T>(getInitialState);

  useEffect(() => {
    const urlValue = searchParams.get(key);
    const currentState = state;

    // Value from URL
    let valueFromUrl: T;
    if (urlValue === null) {
      valueFromUrl = defaultValue;
    } else if (typeof defaultValue === "string") {
      valueFromUrl = urlValue as T;
    } else {
      try {
        valueFromUrl = JSON.parse(urlValue) as T;
      } catch {
        valueFromUrl = urlValue as T;
      }
    }

    // Only update state if it's out of sync with the URL
    if (JSON.stringify(valueFromUrl) !== JSON.stringify(currentState)) {
      setState(valueFromUrl);
    }
  }, [searchParams, key, defaultValue]);

  const updateState = (newState: T) => {
    setState(newState);
    const newSearchParams = new URLSearchParams(searchParams);
    if (newState === defaultValue || newState === "") {
      newSearchParams.delete(key);
    } else {
      newSearchParams.set(key, typeof newState === "string" ? newState : JSON.stringify(newState));
    }
    setSearchParams(newSearchParams, { replace: true });
  };

  return [state, updateState];
}

export default useUrlState;
