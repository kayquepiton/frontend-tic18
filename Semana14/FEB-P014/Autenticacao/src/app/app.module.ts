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
import { ContatoComponent } from './contato/contato.component';
import { FooterComponent } from './footer/footer.component';
import { LoginAuthComponent } from './login-auth/login-auth.component';
import { AuthGuard } from './auth.guard';
import { DateFormatPipe } from './date-format.pipe';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastro', canActivate: [AuthGuard], component: CadastroComponent },
  { path: 'editar/:id', canActivate: [AuthGuard], component: EditarAtendimentoComponent },
  { path: 'atendimentos', canActivate: [AuthGuard], component: AtendimentoComponent },
  { path: 'detalhes/:id', canActivate: [AuthGuard], component: DetalhesAtendimentoComponent },
  { path: 'contato', canActivate: [AuthGuard], component: ContatoComponent },
  { path: 'login', component: LoginAuthComponent },
  
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
    EditarAtendimentoComponent,
    ContatoComponent,
    FooterComponent,
    LoginAuthComponent,
    DateFormatPipe
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
