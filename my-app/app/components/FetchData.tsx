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
			<div className="relative overflow-scroll overflow-x-auto">
				<table className="table-fixed w-full border-collapse border border-blue-200">
					<thead className="text-red-200">
						<tr className="border-separate border border-slate-500">
							<th scope="col" className="sticky top-0 border border-gray-500 bg-blue-300">会社名</th>
							<th scope="col" className="sticky top-0 border border-gray-500 bg-blue-300">URL</th>
							<th scope="col" className="sticky top-0 border border-gray-500 bg-blue-300">イベント名</th>
							<th scope="col" className="sticky top-0 border border-gray-500 bg-blue-300">対象学年</th>
							<th scope="col" className="sticky top-0 border border-gray-500 bg-blue-300">募集締め切り期日</th>
							<th scope="col" className="sticky top-0 border border-gray-500 bg-blue-300">技術スタック</th>
							<th scope="col" className="sticky top-0 border border-gray-500 bg-blue-300">リモート</th>
						</tr>
					</thead>
					<tbody>
						{result?.map((data) => (
							<tr key={data.id} className="border-separate border border-slate-500">
								<td className="border border-gray-500 bg-blue-100">{data.company}</td>
								<td className="border text-blue-500 border-gray-500 bg-blue-100 underline"><a href={data.url}>詳しくはこちら</a></td>
								<td className="border border-gray-500 bg-blue-100">{data.event_name}</td>
								<td className="border border-gray-500 bg-blue-100">{data.target_student}</td>
								<td className="border border-gray-500 bg-blue-100">{new Date(data.recruit_end).toLocaleDateString()}</td>
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
