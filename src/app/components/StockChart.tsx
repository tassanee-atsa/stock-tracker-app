"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { StockDataPoint } from "../types/stockGraphData";

// type Props = {
//     fetchedData: StockDataPoint[]
// }

// export const StockChart = (props: Props) => {
//     return (
//       <ResponsiveContainer width="100%" aspect={3}>
//         <LineChart width={600} height={300} data={props.fetchedData}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="timestamp" />
//           <Line type="monotone" dataKey="high" stroke="#8884d8" />
//           <YAxis />
//         </LineChart>
//       </ResponsiveContainer>
//     );
//   };
  
export const StockChart = ({
  fetchedData,
}: {
  fetchedData: StockDataPoint[];
}) => {
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart width={600} height={300} data={fetchedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <Line type="monotone" dataKey="high" stroke="#8884d8" />
        <YAxis />
      </LineChart>
    </ResponsiveContainer>
  );
};
