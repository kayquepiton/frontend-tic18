import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ResultadoDePesquisaComponent } from './resultado-da-pesquisa/resultado-da-pesquisa.component';
import { BarraDeBuscaComponent } from './barra-de-busca/barra-de-busca.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultadoDePesquisaComponent,
    BarraDeBuscaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
