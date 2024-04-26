import { createSelector } from "@ngrx/store";
import { TarefaState } from "./tarefa.reducer";

export const selectorSelecionaTarefas = (estado: { tarefas: TarefaState }) => estado.tarefas;

export const selectorSelecionaTarefaPorId = (id: string) =>
    createSelector(
        selectorSelecionaTarefas,
        (tarefaState: TarefaState) =>
            tarefaState.tarefas.find(tarefa => tarefa.id === id)
    );
