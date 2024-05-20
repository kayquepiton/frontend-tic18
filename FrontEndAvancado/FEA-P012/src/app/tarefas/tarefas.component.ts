import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowTarefaComponent } from '../show-tarefa/show-tarefa.component';
import { InputTarefaComponent } from '../input-tarefa/input-tarefa.component';

@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [CommonModule, ShowTarefaComponent, InputTarefaComponent],
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent {}
