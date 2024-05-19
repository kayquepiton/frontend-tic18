import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Tarefa } from '../tarefa.model';
import { tarefasActions } from '../store/tarefa.feature';

@Component({
  selector: 'app-input-tarefa',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-tarefa.component.html',
  styleUrls: ['./input-tarefa.component.css']
})
export class InputTarefaComponent {
  newTask = '';

  constructor(private store: Store) { }

  addTask() {
    const newTarefa: Tarefa = {
      id: this.generateId(),
      descricao: this.newTask,
    };

    this.store.dispatch(tarefasActions.adicionarTarefa({ tarefa: newTarefa }));
    this.newTask = '';  // Limpar o campo de entrada após adicionar a tarefa
  }

  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }
}
