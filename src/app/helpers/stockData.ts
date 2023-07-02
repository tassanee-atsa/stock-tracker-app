import {
  StockTimeInterval,
  TransformedIntraday60MinStockData,
} from "../types/stockGraphData";

export const transformAlphaVantageStockData = (
  alphaVantageResponseData: RawStockData,
  interval: StockTimeInterval
): TransformedIntraday60MinStockData => {
  const timeSeries = alphaVantageResponseData[interval];
  const data = Object.entries(timeSeries).map((entry) => {

    const timestamp = interval ===  "Time Series (60min)" ? entry[0].substring(entry[0].indexOf(' ')).slice(0, 6) : entry[0];

    return {
      timestamp: timestamp,
      open: Number.parseFloat(entry[1]["1. open"] as string),
      high: Number.parseFloat(entry[1]["2. high"] as string),
      low: Number.parseFloat(entry[1]["3. low"] as string),
      close: Number.parseFloat(entry[1]["4. close"] as string),
      volume: Number.parseInt(entry[1]["5. volume"] as string),
    };
  });

  return {
    metaData: {
      information: alphaVantageResponseData["Meta Data"][
        "1. Information"
      ] as string,
      symbol: alphaVantageResponseData["Meta Data"]["2. Symbol"] as string,
      lastRefreshed: alphaVantageResponseData["Meta Data"][
        "3. Last Refreshed"
      ] as string,
      interval: alphaVantageResponseData["Meta Data"]["4. Interval"] as string,
      outputSize: alphaVantageResponseData["Meta Data"][
        "5. Output Size"
      ] as string,
      timeZone: alphaVantageResponseData["Meta Data"]["6. Time Zone"] as string,
    },
    data: data,
  };
};
