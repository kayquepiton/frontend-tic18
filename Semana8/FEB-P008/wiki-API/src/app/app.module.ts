import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importe o HttpClientModule

import { AppComponent } from './app.component';

import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ClassesComponent } from './classes/classes.component';
import { ObjetosComponent } from './objetos/objetos.component';
import { PropriedadesComponent } from './propriedades/propriedades.component';
import { ValorPropriedadeComponent } from './valor-propriedade/valor-propriedade.component';
import { AdicionarObjetoComponent } from './adicionar-objeto/adicionar-objeto.component';
import { AlinharBotoesDirective } from './alinhar-botoes.directive';
import { BarraDeBuscaComponent } from './barra-de-busca/barra-de-busca.component';
import { ResultadoDaPesquisaComponent } from './resultado-da-pesquisa/resultado-da-pesquisa.component'; // Importe o ApiService

@NgModule({
  declarations: [
    AppComponent,
    CarrinhoComponent,
    ClassesComponent,
    ObjetosComponent,
    PropriedadesComponent,
    ValorPropriedadeComponent,
    AdicionarObjetoComponent,
    AlinharBotoesDirective,
    BarraDeBuscaComponent,
    ResultadoDaPesquisaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Adicione o HttpClientModule aos imports
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }