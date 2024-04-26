import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule

import { AppComponent } from './app.component';
import { ShowTarefasComponent } from './show-tarefas/show-tarefas.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowTarefasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Importe o FormsModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
