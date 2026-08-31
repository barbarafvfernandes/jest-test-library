import { initialTasks } from "@/data/tasks";
import NovaTarefa from "../components/NovaTarefa/NovaTarefa";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.main} aria-labelledby="page-title">
        <header className={styles.header}>
          <p className={styles.eyebrow}>Organização diária</p>
          <h1 id="page-title">Minhas tarefas</h1>
          <p className={styles.subtitle}>
            Uma pequena lista para manter o essencial em movimento.
          </p>
        </header>

        <NovaTarefa initialTasks={initialTasks} />
      </section>
    </main>
  );
}
