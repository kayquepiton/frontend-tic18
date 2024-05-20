import { Routes } from '@angular/router';
import { EditTarefaComponent } from './edit-tarefa/edit-tarefa.component';
import { TarefasComponent } from './tarefas/tarefas.component';

export const routes: Routes = [
    { path: '', component: TarefasComponent },
    { path: 'edit-tarefa/:id', component: EditTarefaComponent }
];