"use client";
import { useState } from "react";
import type { Task } from "@/data/tasks";
import { useTaskCount } from "@/hooks/useTaskCount";
import styles from "./NovaTarefa.module.css";

type NovaTarefaProps = {
  initialTasks: Task[];
};

export default function NovaTarefa({ initialTasks }: NovaTarefaProps) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [error, setError] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const taskCount = useTaskCount(tasks);

  async function NovaTarefa(_formData: FormData) {
    const newTitle = title.trim();

    if (!newTitle) {
      setError("Informe uma tarefa!");
      return;
    }

    setTasks((currentTasks) => [
      ...currentTasks,
      { id: crypto.randomUUID(), title: newTitle },
    ]);

    setTitle("");
    setError(null);
  }

  return (
    <>
      <form className={styles.form} action={NovaTarefa}>
        <label htmlFor="new-task">Nova tarefa</label>
        <div className={styles.formRow}>
          <input
            id="new-task"
            name="new-task-input"
            type="text"
            placeholder="Digite uma nova tarefa"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
              if (error) setError(null);
            }}
          />
          <button type="submit">Adicionar</button>
        </div>

        {error && (
          <p className={styles.errorMessage} role="alert" aria-live="polite">
            {error}
          </p>
        )}
      </form>

      <div className={styles.listHeader}>
        <h2>Lista atual</h2>
        <span className={styles.count} aria-label={`${taskCount} tarefas no total`}>
          {taskCount} {taskCount === 1 ? "tarefa" : "tarefas"}
        </span>
      </div>

      <ul className={styles.taskList} aria-label="Tarefas">
        {tasks.map((task) => (
          <li className={styles.task} key={task.id}>
            <span className={styles.check} aria-hidden="true">✓</span>
            <span>{task.title}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
