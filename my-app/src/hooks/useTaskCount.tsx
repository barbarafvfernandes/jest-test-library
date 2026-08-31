import { Task } from "@/data/tasks";

export function useTaskCount(tasks: Task[]) {
  return tasks.length;
}