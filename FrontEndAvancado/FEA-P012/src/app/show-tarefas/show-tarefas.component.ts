import { Component } from '@angular/core';
import { TarefaState } from '../store/tarefa.feature';
import { Store } from '@ngrx/store';
import { Tarefa } from '../tarefa.model';
import { tarefasActions } from '../store/tarefa.feature';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-show-tarefas',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './show-tarefas.component.html',
  styleUrls: ['./show-tarefas.component.css']
})
export class ShowTarefasComponent {
  tarefas: Tarefa[] = [];

  constructor(private store: Store<{ tarefas: TarefaState }>) { }

  ngOnInit() {
    this.store.select(state => state.tarefas.tarefas).subscribe((t) => {
      this.tarefas = t;
    });
  }

  removerTarefa(id: string): void {
    this.store.dispatch(tarefasActions.removerTarefa({ id }));
  }
}
