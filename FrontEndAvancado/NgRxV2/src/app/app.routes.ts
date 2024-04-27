import { Routes } from '@angular/router';
import { EditTarefasComponent } from './edit-tarefas/edit-tarefas.component';
import { TarefasComponent } from './tarefas/tarefas.component';

export const routes: Routes = [
    {path: '', component: TarefasComponent},
    {path: 'edit-tarefas/:id', component: EditTarefasComponent}
];