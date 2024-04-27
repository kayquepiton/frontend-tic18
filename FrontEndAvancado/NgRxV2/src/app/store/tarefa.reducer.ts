import { createReducer, on } from "@ngrx/store";
import { Tarefa } from "../tarefa.model";
import { adicionarTarefa, removerTarefa, editarTarefa } from "./tarefa.actions";

// Definição da interface para o estado das tarefas
export interface TarefaState {
  tarefas: Tarefa[];
}

// Estado inicial das tarefas
export const estadoInicial: TarefaState = {
  tarefas: [
    { id: '1', descricao: 'Aprender Angular com a residência TIC18 do CEPEDI' },
    { id: '2', descricao: 'Aprender NgRx com a residência TIC18 do CEPEDI' },
    { id: '3', descricao: 'Aprender Redux com a residência TIC18 do CEPEDI' }
  ]
};

// Reducer para gerenciar o estado das tarefas
export const tarefasReducer = createReducer(
  estadoInicial,
  on(adicionarTarefa, (state, { tarefa }) => ({
    ...state,
    tarefas: [...state.tarefas, tarefa]
  })),
  on(removerTarefa, (state, { id }) => ({
    ...state,
    tarefas: state.tarefas.filter(tarefa => tarefa.id !== id)
  })),
  on(editarTarefa, (state, { id, descricao }) => ({
    ...state,
    tarefas: state.tarefas.map(tarefa =>
      tarefa.id === id ? { ...tarefa, descricao } : tarefa
    )
  }))
);
