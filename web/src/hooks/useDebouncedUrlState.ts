import { useState, useEffect, useCallback } from "react";
import useDebounce from "./useDebounce";
import { useSearchParams } from "react-router-dom";

function useDebouncedUrlState<T>(
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
  const debouncedState = useDebounce(state, 500);

  useEffect(() => {
    const valueFromUrl = getInitialState();
    if (JSON.stringify(valueFromUrl) !== JSON.stringify(state)) {
      setState(valueFromUrl);
    }
  }, [searchParams]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (debouncedState === defaultValue || debouncedState === "") {
      newSearchParams.delete(key);
    } else {
      newSearchParams.set(
        key,
        typeof debouncedState === "string"
          ? debouncedState
          : JSON.stringify(debouncedState)
      );
    }
    setSearchParams(newSearchParams, { replace: true });
  }, [debouncedState, key, defaultValue, setSearchParams]); // eslint-disable-line react-hooks/exhaustive-deps

  return [state, setState];
}

export default useDebouncedUrlState;
