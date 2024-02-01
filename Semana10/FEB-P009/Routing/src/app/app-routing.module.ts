import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Aula7Component } from './aula7/aula7.component';
import { Aula8Component } from './aula8/aula8.component';

const routes: Routes = [
  { path: 'aula7', component: Aula7Component },
  { path: 'aula8', component: Aula8Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }