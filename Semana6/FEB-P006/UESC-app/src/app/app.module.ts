import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importe o HttpClientModule

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { DestaqueComponent } from './destaque/destaque.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { FooterComponent } from './footer/footer.component';
import { UescContentComponent } from './uesc-content/uesc-content.component';
import { BannerComponent } from './banner/banner.component';

import { ApiService } from './api.service'; // Importe o ApiService

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NoticiasComponent,
    DestaqueComponent,
    ServicosComponent,
    ResultadosComponent,
    FooterComponent,
    UescContentComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Adicione o HttpClientModule aos imports
  ],
  providers: [ApiService], // Adicione o ApiService aos providers
  bootstrap: [AppComponent]
})
export class AppModule { }