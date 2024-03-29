import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioPaisesComponent } from './formulario-paises/formulario-paises.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FeatherModule } from 'angular-feather';
import { Trash, Edit, FileMinus } from 'angular-feather/icons';
const routes: Routes = [
  { path: '', component: FormularioPaisesComponent }
  
];

const icons = {
  Trash,
  Edit,
  FileMinus
};

@NgModule({
  declarations: [
    AppComponent,
    FormularioPaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FeatherModule.pick(icons)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FeatherModule]
})
export class AppModule { }
