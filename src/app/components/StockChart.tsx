"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
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
    <ResponsiveContainer width="80%" aspect={3}>
      <LineChart
        width={700}
        height={300}
        data={fetchedData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" interval={4} height={100} tickMargin={20}/>
        <Line type="natural" dataKey="high" stroke="green" dot={false} />
        <Line type="linear" dataKey="low" stroke="red" dot={false} />
        <Tooltip />
        <YAxis domain={[150, 210]} tickMargin={20}/>
      </LineChart>
    </ResponsiveContainer>
  );
};
