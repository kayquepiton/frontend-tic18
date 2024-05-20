import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TarefaStore } from '../store/tarefa.store';
import { Tarefa } from '../model/tarefa.model';

@Component({
  selector: 'app-show-tarefa',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './show-tarefa.component.html',
  styleUrls: ['./show-tarefa.component.scss']
})
export class ShowTarefaComponent implements OnInit {
  tarefas: Tarefa[] = [];

  constructor(private tarefaStore: TarefaStore) { }

  ngOnInit() {
    this.tarefaStore.getTarefas().subscribe((tarefas: Tarefa[]) => {
      this.tarefas = tarefas;
    });
  }

  removerTarefa(id: string): void {
    this.tarefaStore.removerTarefa(id);
  }
}
