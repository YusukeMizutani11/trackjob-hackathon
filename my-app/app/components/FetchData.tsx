import React from "react";
import { useFetch } from "../hooks/useFetchUser";

const FetchData = () => {
  const { data } = useFetch("/api/get");
  return (
	<div className="relative overflow-x-auto">
		<table className="table-fixed bg-amber-100 border-separate border border-slate-500">
			<thead className="text-red-200">
				<tr className="border-separate border border-slate-500">
					<th scope="col">Company</th>
					<th scope="col">URL</th>
					<th scope="col">Event Name</th>
					<th scope="col">Target Student</th>
					<th scope="col">Recruit Begin</th>
					<th scope="col">Tech Stack</th>
					<th scope="col">Remote</th>
				</tr>
			</thead>
			<tbody>
				{data?.map((data) => (
					<tr key={data.key} className="border-separate border border-slate-500">
						<td>{data.company}</td>
						<td><a href={data.url}>{data.url}</a></td>
						<td>{data.event_name}</td>
						<td>{data.target_student}</td>
						<td>{data.recruit_begin}</td>
						<td>{data.tech_stack}</td>
						<td>{data.remote}</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
  );
};

export default FetchData;
