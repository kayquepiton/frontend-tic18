import { Component } from '@angular/core';
import { TarefaState } from '../store/tarefa.reducer';
import { Store } from '@ngrx/store';
import { selectorSelecionaTarefa } from '../store/tarefa.seletors';
import { Tarefa } from '../tarefa.model';
import { removerTarefa, editarTarefa } from '../store/tarefa.actions';
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
  tarefaSelecionada: Tarefa | null = null;

  constructor(private store: Store<{ tarefas: TarefaState }>) { }

  ngOnInit() {
    this.store.select(selectorSelecionaTarefa).subscribe((t) => {
      this.tarefas = t.tarefas;
    });
  }
  
  removerTarefa(id: string): void {
    this.store.dispatch(removerTarefa({ id }));
  }
}