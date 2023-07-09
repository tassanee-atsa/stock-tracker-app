import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { symbol: string }}
) {
    const res = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${params.symbol}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
    );
    const data = await res.json();

    return NextResponse.json({ data });
}