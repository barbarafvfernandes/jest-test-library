export type Task = {
  id: string;
  title: string;
};

export const initialTasks: Task[] = [
  { id: "task-1", title: "Definir prioridades da semana" },
  { id: "task-2", title: "Responder mensagens importantes" },
  { id: "task-3", title: "Revisar o planejamento de amanhã" },
];