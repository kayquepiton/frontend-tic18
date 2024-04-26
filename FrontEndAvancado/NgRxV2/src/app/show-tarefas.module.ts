import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule

import { ShowTarefasComponent } from './show-tarefas/show-tarefas.component';

@NgModule({
  declarations: [
    ShowTarefasComponent
  ],
  imports: [
    CommonModule,
    FormsModule // Importe o FormsModule aqui
  ],
  exports: [
    ShowTarefasComponent
  ]
})
export class ShowTarefasModule { }
