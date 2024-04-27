import { createAction, props } from '@ngrx/store';
import { Tarefa } from '../tarefa.model';

// Ação para adicionar uma nova tarefa
export const adicionarTarefa = createAction(
  '[Tarefa] Adicionar Tarefa',
  props<{ tarefa: Tarefa }>()
);

// Ação para remover uma tarefa existente
export const removerTarefa = createAction(
  '[Tarefa] Remover Tarefa',
  props<{ id: string }>()
);

// Ação para editar uma tarefa existente
export const editarTarefa = createAction(
  '[Tarefa] Editar Tarefa',
  props<{ id: string, descricao: string }>()
);
