import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { DataContext } from "./Root";

const Statistics = () => {
  const datas = useContext(DataContext)
  const data = datas.data
  // console.log(data);
  return (
    <div  className="mt-[80px] mx-auto w-10/12">
      <div>
        <h1 className="text-2xl font-bold text-center">Quiz Rechart</h1>
      </div>
      <ResponsiveContainer width="100%" height={400}>
      <BarChart
        width={400}
        height={400}
        data={data}
       className="mx-auto"
      >
        <Bar type="monotone" dataKey="total" fill="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip></Tooltip>
      </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
