import { StockChart } from "./components/StockChart";

import styles from "./page.module.css";

export default async function Home() {
  return (
    <main className={styles.main}>
      <StockChart />
    </main>
  );
}
