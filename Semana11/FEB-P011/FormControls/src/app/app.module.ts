import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importe o HttpClientModule

import { AppComponent } from './app.component';

import { AlinharBotoesDirective } from './alinhar-botoes.directive';
import { DataService } from './data.service';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component'; // Importe o seu serviço
import { ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CadastroStatusComponent } from './cadastro-status/cadastro-status.component';

@NgModule({
  declarations: [
    AppComponent,
    AlinharBotoesDirective,
    FormUsuarioComponent,
    CadastroStatusComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    HttpClientModule // Adicione o HttpClientModule aos imports
  ],
  providers: [DataService, provideAnimationsAsync()], // Adicione o DataService aos provedores
  bootstrap: [AppComponent]
})
export class AppModule { }
