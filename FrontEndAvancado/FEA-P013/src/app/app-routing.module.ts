import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowTarefasComponent } from './show-tarefas/show-tarefas.component';
import { EditTarefasComponent } from './edit-tarefas/edit-tarefas.component';

const routes: Routes = [
  { path: '', component: ShowTarefasComponent },
  { path: 'tarefas/:id/editar', component: EditTarefasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
