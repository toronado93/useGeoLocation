import { useEffect, useState } from "react";

export function useCounter(initialState, key) {
  // GET
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  //   SET
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
