export type TransformedIntraday60MinStockData = {
  metaData: {
    information: string;
    symbol: string;
    lastRefreshed: string;
    interval: string;
    outputSize: string;
    timeZone: string;
  };
  data: StockDataPoint[];
};

export type StockDataPoint = {
  timestamp: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
};

export type StockTimeInterval = "Weekly Time Series" | "Time Series (60min)" | "Monthly Time Series";