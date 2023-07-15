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
import { StockDataPoint, TransformedIntraday60MinStockData } from "../types/stockGraphData";
import { useEffect, useState } from "react";

enum TIMEFRAMES {
  HOURLY = "hourly",
  WEEKLY = "weekly",
  MONTHLY = "monthly",
}

type Props = {
  symbol?: string;
}

export const StockChart = ({symbol = "IBM"}: Props) => {
  const [timeFrame, setTimeFrame] = useState<TIMEFRAMES>(TIMEFRAMES.WEEKLY);
  const [stockData, setStockData] = useState<TransformedIntraday60MinStockData | undefined>();
  let highestPrice = 1;
  let lowestPrice = 0;
  if (stockData) {
    highestPrice = Math.max(...stockData.data.map((dataPoint: any) => dataPoint.high));
    highestPrice *= 1.05;
    highestPrice = Math.round(highestPrice);
  }
  if (stockData) {
    lowestPrice = Math.min(...stockData.data.map((dataPoint: any)=> dataPoint.low))
    lowestPrice *= 0.95
    lowestPrice = Math.round(lowestPrice);
  }

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const res = await fetch(`/api/stock/${timeFrame}/${symbol}`);
        setStockData(await res.json());
      } catch {
        setStockData(undefined);
      }
    };

    fetchStockData();
  }, [timeFrame, symbol]);

  return (
    stockData && (
      <>
        <ResponsiveContainer width="80%" aspect={3}>
          <LineChart
            width={700}
            height={300}
            data={stockData.data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="timestamp"
              interval={Math.round(stockData.data.length/6)}
              height={100}
              tickMargin={20}
            />
            <Line type="natural" dataKey="high" stroke="green" dot={false} />
            <Line type="linear" dataKey="low" stroke="red" dot={false} />
            <Tooltip />
            <YAxis domain={[lowestPrice, highestPrice]} tickMargin={20} />
          </LineChart>
        </ResponsiveContainer>
        <button
          onClick={() => {
            setTimeFrame(TIMEFRAMES.HOURLY);
          }}
        >
          Last 24 hours
        </button>
        <button
          onClick={() => {
            setTimeFrame(TIMEFRAMES.WEEKLY);
          }}
        >
          last 3 months
        </button>
        <button
          onClick={() => {
            setTimeFrame(TIMEFRAMES.MONTHLY);
          }}
        >
          last 24 months
        </button>
      </>
    )
  );
};


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