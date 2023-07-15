import { StockChart } from "../../components/StockChart";

import styles from "../../page.module.css";

export default async function Stock({ params }: { params: { symbol: string } }) {
  console.log(params.symbol)
  return (
    <main className={styles.main}>
      <StockChart symbol={params.symbol} />
    </main>
  );
}
