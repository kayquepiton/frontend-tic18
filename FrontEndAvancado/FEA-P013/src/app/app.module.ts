import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShowTarefasComponent } from './show-tarefas/show-tarefas.component';
import { EditTarefasComponent } from './edit-tarefas/edit-tarefas.component';

const routes: Routes = [
  { path: '', component: ShowTarefasComponent },
  { path: 'edit-tarefas/:id', component: EditTarefasComponent } // Defina suas rotas aqui
];

@NgModule({
  declarations: [
    AppComponent,
    ShowTarefasComponent,
    EditTarefasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Configure as rotas principais aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
