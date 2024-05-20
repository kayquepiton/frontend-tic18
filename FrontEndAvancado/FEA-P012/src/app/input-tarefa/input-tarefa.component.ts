import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TarefaStore } from '../store/tarefa.store';
import { Tarefa } from '../model/tarefa.model';

@Component({
  selector: 'app-input-tarefa',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-tarefa.component.html',
  styleUrls: ['./input-tarefa.component.scss']
})
export class InputTarefaComponent {
  newTask = '';

  constructor(private tarefaStore: TarefaStore) { }

  addTask() {
    const newTarefa: Tarefa = {
      id: this.generateId(),
      descricao: this.newTask,
    };

    this.tarefaStore.adicionarTarefa(newTarefa);
    this.newTask = '';  // Limpar o campo de entrada após adicionar a tarefa
  }

  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }
}
