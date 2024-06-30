import React from "react";
import { useFetch } from "../hooks/useFetchUser";

const FetchData = (props) => {
	const { button } = props;
  const { data } = useFetch("/api/get");
	let result = data;
	if (button == "26卒") {
		result = data?.filter((data) => data.target_student.includes("26") | data.target_student.includes("全学年"));
	}
	else if (button == "27卒") {
		result = data?.filter((data) => data.target_student.includes("27") | data.target_student.includes("全学年"));
	}
	else if (button == "全学年") {
		result = data?.filter((data) => data.target_student.includes("全学年"));
	}
	else if (button == "募集中") {
		result = data?.filter((data) => new Date(data.recruit_end) > new Date());
	}
	else if (button == "募集終了") {
		result = data?.filter((data) => new Date(data.recruit_end) < new Date());
	}
	else if (button == "フロント") {
		result = data?.filter((data) => data.tech_stack.includes("フロント"));
	}
	else if (button == "バック") {
		result = data?.filter((data) => data.tech_stack.includes("バック"));
	}
	else if (button == "ネットワーク") {
		result = data?.filter((data) => data.tech_stack.includes("ネットワーク"));
	}
	else if (button == "対面") {
		result = data?.filter((data) => data.remote=="false");
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
								<td className="border text-blue-500 border-gray-500 bg-blue-100 underline"><a href={data.url}>{data.event_name}</a></td>
								{/* <td className="border border-gray-500 bg-blue-100">{data.event_name}</td> */}
								<td className="border border-gray-500 bg-blue-100">{data.target_student}</td>
								<td className="border border-gray-500 bg-blue-100">{data.recruit_end ? new Date(data.recruit_end).toLocaleDateString() : ""}</td>
								<td className="border border-gray-500 bg-blue-100">{data.tech_stack}</td>
								<td className="border border-gray-500 bg-blue-100">{data.remote === "true" ? "リモート":"対面"}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
  );
};

export default FetchData;
