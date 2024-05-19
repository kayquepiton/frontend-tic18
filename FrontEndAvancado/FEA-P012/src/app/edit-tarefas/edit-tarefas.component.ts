import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TarefaState } from '../store/tarefa.feature';
import { tarefasActions } from '../store/tarefa.feature';

@Component({
  selector: 'app-edit-tarefas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-tarefas.component.html',
  styleUrls: ['./edit-tarefas.component.css']
})
export class EditTarefasComponent {
  novaDescricao: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<{ tarefas: TarefaState }>
  ) {}

  atualizarTarefa() {
    const tarefaId = this.route.snapshot.paramMap.get('id')!;
    
    // Dispara a ação para editar a tarefa com a nova descrição
    this.store.dispatch(tarefasActions.editarTarefa({ id: tarefaId, descricao: this.novaDescricao }));

    // Aguarda um pequeno intervalo antes de navegar para a página inicial
    setTimeout(() => {
      this.navegarParaPaginaInicial();
    }, 100);
  }

  private navegarParaPaginaInicial() {
    this.router.navigate(['/']);
  }
}
