import React from "react";
import { useFetch } from "../hooks/useFetchUser";

const FetchData = () => {
  const { data } = useFetch("/api/get");
  return (
			<div className="relative overflow-scroll overflow-x-auto">
				<table className="table-fixed w-full border-collapse border border-blue-200">
					<thead className="text-red-200">
						<tr className="border-separate border border-slate-500">
							<th scope="col" className="sticky top-0 border border-gray-500 bg-blue-300">Company</th>
							<th scope="col" className="sticky top-0 border border-gray-500 bg-blue-300">URL</th>
							<th scope="col" className="sticky top-0 border border-gray-500 bg-blue-300">Event Name</th>
							<th scope="col" className="sticky top-0 border border-gray-500 bg-blue-300">Target Student</th>
							<th scope="col" className="sticky top-0 border border-gray-500 bg-blue-300">Recruit End</th>
							<th scope="col" className="sticky top-0 border border-gray-500 bg-blue-300">Tech Stack</th>
							<th scope="col" className="sticky top-0 border border-gray-500 bg-blue-300">Remote</th>
						</tr>
					</thead>
					<tbody>
						{data?.map((data) => (
							<tr key={data.key} className="border-separate border border-slate-500">
								<td className="border border-gray-500 bg-blue-100">{data.company}</td>
								<td className="border text-blue-500 border-gray-500 bg-blue-100 underline"><a href={data.url}>詳しくはこちら</a></td>
								<td className="border border-gray-500 bg-blue-100">{data.event_name}</td>
								<td className="border border-gray-500 bg-blue-100">{data.target_student}</td>
								<td className="border border-gray-500 bg-blue-100">{data.recruit_end}</td>
								<td className="border border-gray-500 bg-blue-100">{data.tech_stack}</td>
								<td className="border border-gray-500 bg-blue-100">{data.remote}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
  );
};

export default FetchData;
