import { useState, useEffect } from 'react';

// export const LOCAL_STORAGE_KEY = 'travel-app-islogin';

export default function useLocalStorage<T>(
  key: string,
  initialState: T,
): { storage: T; setStorage: (value: T) => void } {
  const [storage, setStorage]: [storage: T, setStorage: (value: T) => void] =
    useState(() => {
      try {
        const value = JSON.parse(localStorage.getItem(key) as string);
        return value || initialState;
      } catch (error) {
        return initialState;
      }
    });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storage));
    console.log(storage);
  }, [storage, key]);

  return { storage, setStorage };
}
