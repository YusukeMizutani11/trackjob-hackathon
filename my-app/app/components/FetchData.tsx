import React from "react";
import { useFetch } from "../hooks/useFetchUser";

const FetchData = (props) => {
	const { button } = props;
  const { data } = useFetch("/api/get");
	let result = data;
	// let result = data?.map((data) => data.recruit_end = new Date(data.recruit_end).toLocaleDateString());
	if (button == "Recruit End") {
		result = data?.filter((data) => new Date(data.recruit_end) > new Date());
	}
	else {
		result = data?.filter((data) => data.remote=="true");
	}

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="sticky top-0 px-6 py-3 bg-gray-100 border border-gray-200 dark:bg-gray-800">
              会社名
            </th>
            <th scope="col" className="sticky top-0 px-6 py-3 bg-gray-100 border border-gray-200 dark:bg-gray-800">
              URL
            </th>
            <th scope="col" className="sticky top-0 px-6 py-3 bg-gray-100 border border-gray-200 dark:bg-gray-800">
              イベント名
            </th>
            <th scope="col" className="sticky top-0 px-6 py-3 bg-gray-100 border border-gray-200 dark:bg-gray-800">
              対象学年
            </th>
            <th scope="col" className="sticky top-0 px-6 py-3 bg-gray-100 border border-gray-200 dark:bg-gray-800">
              募集締め切り期日
            </th>
            <th scope="col" className="sticky top-0 px-6 py-3 bg-gray-100 border border-gray-200 dark:bg-gray-800">
              技術スタック
            </th>
            <th scope="col" className="sticky top-0 px-6 py-3 bg-gray-100 border border-gray-200 dark:bg-gray-800">
              リモート
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
          {data?.map((item) => (
            <tr key={item.key} className="hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4 border border-gray-200 dark:border-gray-700">{item.company}</td>
              <td className="px-6 py-4 border border-gray-200 dark:border-gray-700 text-blue-500 underline">
                <a href={item.url} target="_blank" rel="noopener noreferrer">詳しくはこちら</a>
              </td>
              <td className="px-6 py-4 border border-gray-200 dark:border-gray-700">{item.event_name}</td>
              <td className="px-6 py-4 border border-gray-200 dark:border-gray-700">{item.target_student}</td>
              <td className="px-6 py-4 border border-gray-200 dark:border-gray-700">{item.recruit_end}</td>
              <td className="px-6 py-4 border border-gray-200 dark:border-gray-700">{item.tech_stack}</td>
              <td className="px-6 py-4 border border-gray-200 dark:border-gray-700">{item.remote}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchData;
