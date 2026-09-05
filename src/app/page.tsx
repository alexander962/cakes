import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2>Это главная страница</h2>
        <Link href={"/routing-lab"}>Перейти на учебную страницу</Link>
      </main>
    </div>
  );
}
