// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categoriaSelecionada: string | null = null;
  veiculos: { Name: string }[] = [];
  nomesVeiculos: string[] = [];

  onCategoriaSelecionada(categoria: string) {
    this.categoriaSelecionada = categoria;
    console.log('Categoria selecionada:', categoria);
  }

  onNomesVeiculosSelecionados(nomesVeiculos: string[]) {
    // Converta os nomes dos veículos em objetos correspondentes
    this.veiculos = nomesVeiculos.map(nome => ({ Name: nome }));
    console.log('Array completo de veículos no componente pai:', this.veiculos);
  }
}
