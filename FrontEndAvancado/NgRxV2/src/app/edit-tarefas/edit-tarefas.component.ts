import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { TarefaState } from '../store/tarefa.reducer';
import { Tarefa } from '../tarefa.model';
import { editarTarefa } from '../store/tarefa.actions';

@Component({
  selector: 'app-edit-tarefas',
  templateUrl: './edit-tarefas.component.html',
  styleUrls: ['./edit-tarefas.component.css']
})
export class EditTarefasComponent {
  @Input() tarefa: Tarefa | undefined;

  constructor(private store: Store<{ tarefas: TarefaState }>) {}

  atualizarTarefa() {
    if (this.tarefa) {
      this.store.dispatch(editarTarefa({ id: this.tarefa.id, novaDescricao: this.tarefa.descricao }));
    }
  }

  cancelarEdicao() {
    // Implementar a lógica para cancelar a edição se necessário
  }
}
