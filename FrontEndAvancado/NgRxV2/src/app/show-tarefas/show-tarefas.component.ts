import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TarefaState } from '../store/tarefa.reducer';
import { selectorSelecionaTarefas } from '../store/tarefa.seletors';
import { Tarefa } from '../tarefa.model';
import { removerTarefa, editarTarefa } from '../store/tarefa.actions';


@Component({
  selector: 'app-show-tarefas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-tarefas.component.html',
  styleUrls: ['./show-tarefas.component.css']
})
export class ShowTarefasComponent {
  tarefas: Tarefa[] = [];
  tasks$: Observable<TarefaState>;

  tarefaSelecionada: Tarefa | null = null;
  editing = false;

  constructor(private store: Store<{ tarefas: TarefaState }>, private router: Router) {
    this.tasks$ = this.store.pipe(select('tarefas'));
    this.tasks$.subscribe((tarefaState) => {
      this.tarefas = tarefaState.tarefas;
    });
  }

  removeTarefa(id: string) {
    this.store.dispatch(removerTarefa({ id }));
  }

  iniciarEdicao() {
    this.editing = true;
  }

  cancelarEdicao() {
    this.editing = false;
  }

  atualizarTarefa() {
    if (this.tarefaSelecionada) {
      this.store.dispatch(editarTarefa({ id: this.tarefaSelecionada.id, novaDescricao: this.tarefaSelecionada.descricao }));
      this.cancelarEdicao();
    }
  }

  selecionarTarefa(tarefa: Tarefa) {
    this.tarefaSelecionada = tarefa;
  }
}
