import { createAction, props, createReducer, on, createFeature } from '@ngrx/store';
import { Tarefa as TarefaModel } from '../tarefa.model'; // Renomeando para evitar conflitos de nome

// Ações para adicionar, remover e editar tarefas
export const adicionarTarefa = createAction(
  '[Tarefa] Adicionar Tarefa',
  props<{ tarefa: TarefaModel }>() // Utilizando TarefaModel aqui
);

export const removerTarefa = createAction(
  '[Tarefa] Remover Tarefa',
  props<{ id: string }>()
);

export const editarTarefa = createAction(
  '[Tarefa] Editar Tarefa',
  props<{ id: string, descricao: string }>()
);

// Definição da interface para o estado das tarefas
export interface TarefaState {
  tarefas: TarefaModel[];
}

// Estado inicial das tarefas
const estadoInicial: TarefaState = {
  tarefas: [
    { id: '1', descricao: 'Aprender Angular com a residência TIC18 do CEPEDI' },
    { id: '2', descricao: 'Aprender NgRx com a residência TIC18 do CEPEDI' },
    { id: '3', descricao: 'Aprender Redux com a residência TIC18 do CEPEDI' }
  ]
};

// Reducer para gerenciar o estado das tarefas
const tarefasReducer = createReducer(
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

// Definindo a feature
export const tarefasFeature = createFeature({
  name: 'tarefas',
  reducer: tarefasReducer,
});

// Exportando as ações, a interface e o selector
export const { selectTarefas } = tarefasFeature;
export const tarefasActions = { adicionarTarefa, removerTarefa, editarTarefa };
export interface Tarefa extends TarefaModel {} // Exportando a interface
