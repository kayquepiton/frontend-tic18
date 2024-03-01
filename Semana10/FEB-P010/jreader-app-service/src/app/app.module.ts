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
import { DataService } from './data.service'; // Importe o seu serviço

@NgModule({
  declarations: [
    AppComponent,
    CarrinhoComponent,
    ClassesComponent,
    ObjetosComponent,
    PropriedadesComponent,
    ValorPropriedadeComponent,
    AdicionarObjetoComponent,
    AlinharBotoesDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Adicione o HttpClientModule aos imports
  ],
  providers: [DataService], // Adicione o DataService aos provedores
  bootstrap: [AppComponent]
})
export class AppModule { }
