import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Importando o operador 'map'
import { Tarefa } from '../model/tarefa.model';

interface TarefaState {
  tarefas: Tarefa[];
}

const initialState: TarefaState = {
  tarefas: [
    { id: '1', descricao: 'Aprender Angular com a residência TIC18 do CEPEDI' },
    { id: '2', descricao: 'Aprender NgRx com a residência TIC18 do CEPEDI' },
    { id: '3', descricao: 'Aprender Redux com a residência TIC18 do CEPEDI' }
  ]
};

@Injectable({
  providedIn: 'root'
})
export class TarefaStore {
  private _state = new BehaviorSubject<TarefaState>(initialState);

  getTarefas(): Observable<Tarefa[]> {
    return this._state.asObservable().pipe(
      map((state: TarefaState) => state.tarefas) // Adicionando tipo explícito ao parâmetro 'state'
    );
  }

  adicionarTarefa(tarefa: Tarefa) {
    const currentState = this._state.value;
    this._state.next({
      ...currentState,
      tarefas: [...currentState.tarefas, tarefa]
    });
  }

  removerTarefa(id: string) {
    const currentState = this._state.value;
    this._state.next({
      ...currentState,
      tarefas: currentState.tarefas.filter(tarefa => tarefa.id !== id)
    });
  }

  editarTarefa(id: string, descricao: string) {
    const currentState = this._state.value;
    this._state.next({
      ...currentState,
      tarefas: currentState.tarefas.map(tarefa =>
        tarefa.id === id ? { ...tarefa, descricao } : tarefa
      )
    });
  }
}
