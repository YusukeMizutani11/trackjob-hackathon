import React from "react";
import { useFetch } from "../hooks/useFetchUser";

const FetchData = () => {
  const { data } = useFetch("/api/get");
  return (
    <div className="relative overflow-x-auto w-full">
      <table className="table-auto border-collapse border border-blue-200 w-full">
        <thead className="text-red-200">
          <tr className="border-separate border border-slate-500">
            <th scope="col" className="border border-gray-500 bg-blue-200 px-4 py-2">Company</th>
            <th scope="col" className="border border-gray-500 bg-blue-200 px-4 py-2">URL</th>
            <th scope="col" className="border border-gray-500 bg-blue-200 px-4 py-2">Event Name</th>
            <th scope="col" className="border border-gray-500 bg-blue-200 px-4 py-2">Target Student</th>
            <th scope="col" className="border border-gray-500 bg-blue-200 px-4 py-2">Recruit Begin</th>
            <th scope="col" className="border border-gray-500 bg-blue-200 px-4 py-2">Tech Stack</th>
            <th scope="col" className="border border-gray-500 bg-blue-200 px-4 py-2">Remote</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.key} className="border-separate border border-slate-500">
              <td className="border border-gray-500 bg-blue-200 px-4 py-2">{item.company}</td>
              <td className="border border-gray-500 bg-blue-200 px-4 py-2">
                <a href={item.url} className="text-blue-600 underline">{item.url}</a>
              </td>
              <td className="border border-gray-500 bg-blue-200 px-4 py-2">{item.event_name}</td>
              <td className="border border-gray-500 bg-blue-200 px-4 py-2">{item.target_student}</td>
              <td className="border border-gray-500 bg-blue-200 px-4 py-2">{item.recruit_begin}</td>
              <td className="border border-gray-500 bg-blue-200 px-4 py-2">{item.tech_stack}</td>
              <td className="border border-gray-500 bg-blue-200 px-4 py-2">{item.remote}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchData;