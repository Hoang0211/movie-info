import { useState, useCallback } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (url) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to get data!');
      }

      const data = await response.json();
      window.scrollTo({ top: 0 });
      setIsLoading(false);
      return data;
    } catch (err) {
      setError(err.message || 'Something went wrong!');
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
