import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Tarefa, selectTarefas } from './store/tarefa.feature';
import { InputTarefaComponent } from './input-tarefa/input-tarefa.component';
import { ShowTarefasComponent } from './show-tarefas/show-tarefas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InputTarefaComponent, ShowTarefasComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgRxV2';
  tarefas$: Observable<Tarefa[]>;

  constructor(private store: Store) {
    this.tarefas$ = this.store.select(selectTarefas);
  }
}
