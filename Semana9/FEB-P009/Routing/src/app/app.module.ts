import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ResultadoDePesquisaComponent } from './resultado-da-pesquisa/resultado-da-pesquisa.component';
import { BarraDeBuscaComponent } from './barra-de-busca/barra-de-busca.component';
import { Aula8Component } from './aula8/aula8.component';
import { Aula7Component } from './aula7/aula7.component';
import { Aula6Component } from './aula6/aula6.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ClassesComponent } from './classes/classes.component';
import { ObjetosComponent } from './objetos/objetos.component';
import { PropriedadesComponent } from './propriedades/propriedades.component';
import { ValorPropriedadeComponent } from './valor-propriedade/valor-propriedade.component';
import { AdicionarObjetoComponent } from './adicionar-objeto/adicionar-objeto.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { MenuComponent } from './menu/menu.component';
import { DestaqueComponent } from './destaque/destaque.component';
import { UescContentComponent } from './uesc-content/uesc-content.component';
import { NoticiasComponent } from './noticias/noticias.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultadoDePesquisaComponent,
    BarraDeBuscaComponent,
    Aula8Component,
    Aula7Component,
    Aula6Component,
    CarrinhoComponent,
    ClassesComponent,
    ObjetosComponent,
    PropriedadesComponent,
    ValorPropriedadeComponent,
    AdicionarObjetoComponent,
    BannerComponent,
    FooterComponent,
    ServicosComponent,
    ResultadosComponent,
    MenuComponent,
    DestaqueComponent,
    UescContentComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
