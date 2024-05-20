import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tarefa } from '../model/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private tarefasSubject = new BehaviorSubject<Tarefa[]>([
    { id: '1', descricao: 'Aprender Angular com a residência TIC18 do CEPEDI' },
    { id: '2', descricao: 'Aprender NgRx com a residência TIC18 do CEPEDI' },
    { id: '3', descricao: 'Aprender Redux com a residência TIC18 do CEPEDI' }
  ]);

  tarefas$ = this.tarefasSubject.asObservable();

  adicionarTarefa(tarefa: Tarefa) {
    const tarefas = this.tarefasSubject.getValue();
    this.tarefasSubject.next([...tarefas, tarefa]);
  }

  removerTarefa(id: string) {
    const tarefas = this.tarefasSubject.getValue();
    this.tarefasSubject.next(tarefas.filter(tarefa => tarefa.id !== id));
  }

  editarTarefa(id: string, descricao: string) {
    const tarefas = this.tarefasSubject.getValue();
    const updatedTarefas = tarefas.map(tarefa =>
      tarefa.id === id ? { ...tarefa, descricao } : tarefa
    );
    this.tarefasSubject.next(updatedTarefas);
  }
}
