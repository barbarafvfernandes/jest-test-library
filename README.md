# Minhas Tarefas

Aplicação de lista de tarefas criada com Next.js(https://nextjs.org/) e React, com foco principal em praticar e demonstrar testes automatizados com Jest(https://jestjs.io/) e Testing Library(https://testing-library.com/).

O projeto mantém uma interface pequena para que o comportamento fique fácil de observar e testar: é possível visualizar tarefas iniciais, adicionar uma nova tarefa, validar o envio vazio e acompanhar a atualização do contador.

## Objetivo do projeto

Este é um projeto prático voltado para testes de interfaces.

Na suíte atual de testes, são exercitados:

- renderização do cabeçalho e textos;
- renderização das tarefas iniciais do arquivo de dados;
- renderização do formulário e do contador;
- validação de tarefa vazia e mensagem de alerta;
- limpeza do erro quando o usuário volta a digitar;
- inclusão de uma tarefa, limpeza do campo e atualização do contador;
- contagem de tarefas por meio de um hook testado com `renderHook`.

## Tecnologias

- Next.js: 16.3.5;
- React: 19.2.8;
- TypeScript;
- Jest 30.4.2;
- Jest DOM (`@testing-library/jest-dom`);
- Testing Library para React (`@testing-library/react`);
- Testing Library User Event (`@testing-library/user-event`);
- `@testing-library/jest-dom` para asserções semânticas e legíveis no DOM.

## Como executar

### Instalação

```bash
npm install
```

### Executar a aplicação

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Testes

Execute toda a suíte com:

```bash
npm run test
```

Para acompanhar os testes em modo observador:

```bash
npx jest --watch
```

Para executar um arquivo específico:

```bash
npm run test -- NovaTarefa.test.tsx
```

Para gerar o relatório de cobertura:

```bash
npx jest --coverage
```

Os testes usam o ambiente `jsdom`, configurado em `jest.config.ts`, e consultam a interface com métodos como `getByRole`, `getByLabelText` e `getByText`. As interações são simuladas com `userEvent`, mantendo os cenários próximos do uso real.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção |
| `npm run start` | Inicia a aplicação em produção |
| `npm run lint` | Executa o ESLint |
| `npm run test` | Executa os testes com Jest |

## Estrutura principal

```text
src/
├── app/                    # Página principal e testes da página
├── components/NovaTarefa/  # Formulário, lista e testes do componente
├── data/                   # Dados iniciais das tarefas
└── hooks/                  # Hooks e testes unitários
```
