import {renderHook} from "@testing-library/react";
import {useTaskCount} from "./useTaskCount";

test("Retorna a contagem correta de tarefas", () => {
  const tasks = [
    { id: "1", title: "Tarefa 1", completed: false },
    { id: "2", title: "Tarefa 2", completed: true },
    { id: "3", title: "Tarefa 3", completed: false },
  ];
  const { result } = renderHook(() => useTaskCount(tasks));
  expect(result.current).toBe(3);
});