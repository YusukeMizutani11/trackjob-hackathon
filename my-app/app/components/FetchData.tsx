import React from "react";
import { useFetch } from "../hooks/useFetchUser";

const FetchData = () => {
  const { data } = useFetch("/api/get");
  return (
    <div>
      {data?.map((data) => (
        <div key={data.id}>
          <div>{data.company}</div>
          <div>{data.remote}</div>
        </div>
      ))}
    </div>
  );
};

export default FetchData;
