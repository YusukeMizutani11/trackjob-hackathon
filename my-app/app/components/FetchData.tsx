import React from "react";
import { useFetch } from "../hooks/useFetchUser";

const FetchData = () => {
  const { data } = useFetch("/api/get");
  return (
	<div className="relative overflow-x-auto">
		<table className="table-fixed border-collapse border border-blue-200">
			<thead className="text-red-200">
				<tr className="border-separate border border-slate-500">
					<th scope="col" className="border border-gray-500 bg-blue-200">Company</th>
					<th scope="col" className="border border-gray-500 bg-blue-200">URL</th>
					<th scope="col" className="border border-gray-500 bg-blue-200">Event Name</th>
					<th scope="col" className="border border-gray-500 bg-blue-200">Target Student</th>
					<th scope="col" className="border border-gray-500 bg-blue-200">Recruit Begin</th>
					<th scope="col" className="border border-gray-500 bg-blue-200">Tech Stack</th>
					<th scope="col" className="border border-gray-500 bg-blue-200">Remote</th>
				</tr>
			</thead>
			<tbody>
				{data?.map((data) => (
					<tr key={data.key} className="border-separate border border-slate-500">
						<td className="border border-gray-500 bg-blue-200">{data.company}</td>
						<td className="border border-gray-500 bg-blue-200"><a href={data.url}>{data.url}</a></td>
						<td className="border border-gray-500 bg-blue-200">{data.event_name}</td>
						<td className="border border-gray-500 bg-blue-200">{data.target_student}</td>
						<td className="border border-gray-500 bg-blue-200">{data.recruit_begin}</td>
						<td className="border border-gray-500 bg-blue-200">{data.tech_stack}</td>
						<td className="border border-gray-500 bg-blue-200">{data.remote}</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
  );
};

export default FetchData;
