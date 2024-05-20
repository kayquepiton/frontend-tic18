// app.config.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { tarefasFeature } from './store/tarefa.feature';
import { routes } from './app.routes';

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ tarefas: tarefasFeature.reducer })
  ],
  declarations: [],
  exports: [],
  providers: [],
})
export class AppConfigModule { }
