import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { TarefaState } from '../store/tarefa.reducer';
import { Tarefa } from "../tarefa.model";
import { editarTarefa } from '../store/tarefa.actions';

@Component({
  selector: 'app-edit-tarefas',
  templateUrl: './edit-tarefas.component.html',
  styleUrls: ['./edit-tarefas.component.css']
})
export class EditTarefasComponent {
  @Input() tarefa: Tarefa = { id: '', descricao: '' };


  editing: boolean = false; // Flag para indicar se está em modo de edição
  editedDescricao: string = ''; // Nova descrição editada

  constructor(private store: Store<{ tarefas: TarefaState }>) {}

  // Ativar o modo de edição
  iniciarEdicao() {
    if (this.tarefa) {
      this.editedDescricao = this.tarefa.descricao; // Inicializar a descrição editada
      this.editing = true; // Habilitar o modo de edição
    }
  }

  // Finalizar a edição e atualizar a tarefa
  finalizarEdicao() {
    if (this.tarefa && this.editedDescricao.trim() !== '') {
      // Atualizar a tarefa com a nova descrição
      const tarefaAtualizada: Tarefa = { ...this.tarefa, descricao: this.editedDescricao };
      this.store.dispatch(editarTarefa({ tarefa: tarefaAtualizada }));
      this.cancelarEdicao(); // Cancelar o modo de edição
    }
  }

  // Cancelar a edição e voltar para o modo de visualização
  cancelarEdicao() {
    this.editing = false; // Desabilitar o modo de edição
    this.editedDescricao = ''; // Limpar a descrição editada
  }
}
