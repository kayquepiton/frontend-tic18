import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FeatherModule } from 'angular-feather';
import { Trash, Edit, FileMinus } from 'angular-feather/icons';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AtendimentoComponent } from './atendimento/atendimento.component';
import { DetalhesAtendimentoComponent } from './detalhes-atendimento/detalhes-atendimento.component';
import { EditarAtendimentoComponent } from './editar-atendimento/editar-atendimento.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'editar/:id', component: EditarAtendimentoComponent },
  { path: 'atendimentos', component: AtendimentoComponent },
  { path: 'detalhes/:id', component: DetalhesAtendimentoComponent },
];

const icons = {
  Trash,
  Edit,
  FileMinus
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AtendimentoComponent,
    EditarAtendimentoComponent,
    DetalhesAtendimentoComponent,
    CadastroComponent,
    AtendimentoComponent,
    DetalhesAtendimentoComponent,
    EditarAtendimentoComponent
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
