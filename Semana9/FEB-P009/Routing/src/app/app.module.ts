import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultadoDePesquisaComponent } from './resultado-da-pesquisa/resultado-da-pesquisa.component';
import { BarraDeBuscaComponent } from './barra-de-busca/barra-de-busca.component';
import { Aula8Component } from './aula8/aula8.component';
import { Aula7Component } from './aula7/aula7.component';
import { AdicionarObjetoComponent } from './adicionar-objetos/adicionar-objeto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ClassesComponent } from './classes/classes.component';
import { ObjetosComponent } from './objetos/objetos.component';
import { PropriedadesComponent } from './propriedades/propriedades.component';
import { ValorPropriedadeComponent } from './valor-propriedade/valor-propriedade.component';
import { Aula6Component } from './aula6/aula6.component';
import { BannerComponent } from './banner/banner.component';
import { DestaqueComponent } from './destaque/destaque.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { ServicosComponent } from './servicos/servicos.component';
import { UescContentComponent } from './uesc-content/uesc-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultadoDePesquisaComponent,
    BarraDeBuscaComponent,
    Aula8Component,
    Aula7Component,
    AdicionarObjetoComponent,
    CarrinhoComponent,
    ClassesComponent,
    ObjetosComponent,
    PropriedadesComponent,
    ValorPropriedadeComponent,
    Aula6Component,
    BannerComponent,
    DestaqueComponent,
    FooterComponent,
    MenuComponent,
    NoticiasComponent,
    ResultadosComponent,
    ServicosComponent,
    UescContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
