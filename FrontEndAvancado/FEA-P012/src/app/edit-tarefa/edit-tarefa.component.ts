import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TarefaStore } from '../store/tarefa.store';

@Component({
  selector: 'app-edit-tarefa',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-tarefa.component.html',
  styleUrls: ['./edit-tarefa.component.scss']
})
export class EditTarefaComponent {
  novaDescricao: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tarefaStore: TarefaStore
  ) {}

  atualizarTarefa() {
    const tarefaId = this.route.snapshot.paramMap.get('id')!;
    this.tarefaStore.editarTarefa(tarefaId, this.novaDescricao);

    setTimeout(() => {
      this.navegarParaPaginaInicial();
    }, 100);
  }

  private navegarParaPaginaInicial() {
    this.router.navigate(['/']);
  }
}
