import { transformAlphaVantageStockData } from "@/app/helpers/stockData";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { symbol: string }}
) {
    const res = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${params.symbol}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
    );
    const data = await res.json();
    const transformedStockData = transformAlphaVantageStockData(
        data,
        "Monthly Time Series"
      );
      transformedStockData.data.splice(24).reverse();
    
      return NextResponse.json({
        metadata: transformedStockData.metaData,
        data: transformedStockData.data,
      });


}