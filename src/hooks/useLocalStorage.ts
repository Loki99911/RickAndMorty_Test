import { useState, useEffect } from "react";

// export const LOCAL_STORAGE_KEY = 'travel-app-islogin';

export default function useLocalStorage({ key }: { key: string }) {
  const [storage, setStorage] = useState(() => {
    try {
      const value = JSON.parse(localStorage.getItem(key) as string);
      return value || [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storage));  
  }, [storage, key]);

  return { storage, setStorage };
}
