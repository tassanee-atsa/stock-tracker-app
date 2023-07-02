import { transformAlphaVantageStockData } from "./helpers/stockData";
import styles from "./page.module.css";

export default async function Home() {

  const getStockData = async () => {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&outputsize=full&interval=60min&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
    );
    return response.json();
  };

  const rawStockData = await getStockData();

  const transformedStockData = transformAlphaVantageStockData(rawStockData);

  return (
    <main className={styles.main}>
      <div>
        <p>{JSON.stringify(transformedStockData)}</p>
      </div>
    </main>
  );
}
