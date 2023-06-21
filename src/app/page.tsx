'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  //www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&outputsize=full&apikey=demo

  const [stockData, setStockData] = useState({});

  useEffect(() => {
    const getStockData = async () => {
      const stockData = await fetch(
        "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&outputsize=full&apikey=demo"
      );
      setStockData(await stockData.json());
    };
    getStockData();
  }, []);

  console.log(stockData);

  return (
    <main className={styles.main}>
      <div>
        <p>
          {JSON.stringify(stockData)}
        </p>
      </div>
    </main>
  );
}
