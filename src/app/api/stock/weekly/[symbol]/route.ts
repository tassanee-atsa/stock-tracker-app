import { transformAlphaVantageStockData } from "@/app/helpers/stockData";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { symbol: string } }
) {
  const res = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${params.symbol}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
  );
  const data = await res.json();

  const transformedStockData = transformAlphaVantageStockData(
    data,
    "Weekly Time Series"
  );
  transformedStockData.data.splice(12).reverse();

  return NextResponse.json({
    metadata: transformedStockData.metaData,
    data: transformedStockData.data,
  });
}
