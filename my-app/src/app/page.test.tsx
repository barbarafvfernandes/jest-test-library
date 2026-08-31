import { render, screen } from "@testing-library/react";
import Home from "./page";
import { initialTasks } from "@/data/tasks";
import "@testing-library/jest-dom";

describe("Página Home - Lista de Tarefas", () => {
  it("deve renderizar o cabeçalho e os textos corretamente", () => {
    render(<Home />);

    // Valida o título principal associado ao aria-labelledby
    const title = screen.getByRole("heading", { name: /minhas tarefas/i });
    expect(title).toBeInTheDocument();

    // Valida os textos de apoio do cabeçalho
    expect(screen.getByText("Organização diária")).toBeInTheDocument();
    expect(
      screen.getByText("Uma pequena lista para manter o essencial em movimento.")
    ).toBeInTheDocument();
  });

  it("deve renderizar todas as tarefas iniciais do arquivo de dados", () => {
    render(<Home />);

    // Percorre o array real de tarefas e garante que o title de cada uma está na tela
    initialTasks.forEach((task) => {
      const taskTitle = screen.getByText(task.title);
      expect(taskTitle).toBeInTheDocument();
    });
  });
});
