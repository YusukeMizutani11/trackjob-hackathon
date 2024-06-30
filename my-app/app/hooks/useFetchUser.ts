import { useState, useEffect } from "react";
export const useFetch = (url: string) => {
  const [data, setData] = useState<any[]>();
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const parsedData = await response.json();
        setData(parsedData);
        setError(null);
      } catch {
        setError(`${error} could not fetch data`);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, isloading, error };
};
