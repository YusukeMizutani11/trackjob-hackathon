import { z } from "zod";
import { schema } from "../api/post/route";

type Data = z.infer<typeof schema>
import { useState, useEffect } from "react";
export const useFetch = (url: string) => {
  const [data, setData] = useState<Data[]>();
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("error");
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const parsedData = await response.json();
        setData(parsedData);
        setError("error");
      } catch {
        setError(`${error} could not fetch data`);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, isloading, error };
};
