if (!global.crypto) {
  Object.defineProperty(global, 'crypto', {
    value: { randomUUID: () => Math.random().toString(36).substring(2) }
  });
}

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NovaTarefa from "./NovaTarefa";
import { Task } from "@/data/tasks";
import "@testing-library/jest-dom";

// Mock inicial de tarefas para os testes
const mockInitialTasks: Task[] = [
  { id: "1", title: "Tarefa Existente 1"},
];

describe("Componente NovaTarefa", () => {
  
  test("deve renderizar o estado inicial corretamente com o contador", () => {
    render(<NovaTarefa initialTasks={mockInitialTasks} />);

    // Verifica se o input, botão e lista inicial aparecem na tela
    expect(screen.getByLabelText(/nova tarefa/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /adicionar/i })).toBeInTheDocument();
    expect(screen.getByText("Tarefa Existente 1")).toBeInTheDocument();
    
    // Verifica o contador inicial
    expect(screen.getByText("1 tarefa")).toBeInTheDocument();
  });

  test("deve exibir mensagem de erro na validação se tentar submeter input vazio", async () => {
    const user = userEvent.setup();
    render(<NovaTarefa initialTasks={[]} />);

    const button = screen.getByRole("button", { name: /adicionar/i });
    
    // Clica no botão sem digitar nada
    await user.click(button);

    // Verifica a mensagem de erro e seu papel de acessibilidade (role="alert")
    const errorMessage = screen.getByRole("alert");
    expect(errorMessage).toHaveTextContent("Informe uma tarefa!");
  });

  test("deve limpar o erro quando o usuário começar a digitar no campo novamente", async () => {
    const user = userEvent.setup();
    render(<NovaTarefa initialTasks={[]} />);

    const input = screen.getByLabelText(/nova tarefa/i);
    const button = screen.getByRole("button", { name: /adicionar/i });

    // Força o erro
    await user.click(button);
    expect(screen.getByRole("alert")).toBeInTheDocument();

    // Digita algo no input
    await user.type(input, "A");

    // O erro deve sumir da tela
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  test("deve submeter uma nova tarefa com sucesso, limpar o input e atualizar a lista/contador", async () => {
    const user = userEvent.setup();
    render(<NovaTarefa initialTasks={mockInitialTasks} />);

    const input = screen.getByLabelText(/nova tarefa/i);
    const button = screen.getByRole("button", { name: /adicionar/i });

    // Digita o nome da nova tarefa
    await user.type(input, "Implementar testes com Jest e Testing Library");
    
    // Submete o formulário
    await user.click(button);

    // 1. O input deve ter sido limpo
    expect(input).toHaveValue("");

    // 2. A nova tarefa deve aparecer listada na tela
    expect(screen.getByText("Implementar testes com Jest e Testing Library")).toBeInTheDocument();

    // 3. O contador deve ter atualizado para 2 tarefas
    expect(screen.getByText("2 tarefas")).toBeInTheDocument();
  });
});



