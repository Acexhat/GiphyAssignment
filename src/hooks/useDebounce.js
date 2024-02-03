import { useRef, useEffect } from 'react';

const useDebounce = () => {
  const timeout = useRef();

  const debounce = (func, wait) => (...args) => {
    console.log("clearing timeout")
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => func(...args), wait);
  }

  useEffect(() => {
    return () => {
      if (!timeout.current) return;
      clearTimeout(timeout.current);
    }
  }, []);

  return { debounce }
}

export default useDebounce;