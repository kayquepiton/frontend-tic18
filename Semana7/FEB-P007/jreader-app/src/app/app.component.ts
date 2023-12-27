// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categoriaSelecionada: string | null = null;
  veiculos: any[] = [];
  veiculoSelecionado: string | null = null;
  nomesVeiculos: string[] = [];

  onCategoriaSelecionada(categoria: string) {
    this.categoriaSelecionada = categoria;
    console.log('Categoria selecionada:', categoria);
  }

  onVeiculosSelecionados(veiculos: { Name: string }[]) {
    this.veiculos = veiculos;
    console.log('Veículos no componente pai:', veiculos);
  }

  onVeiculoSelecionado(veiculo: string) {
    this.veiculoSelecionado = veiculo;
    console.log('Veículo selecionado:', veiculo);
  }

  onNomesVeiculosSelecionados(nomesVeiculos: string[]) {
    // Implemente a lógica necessária aqui
    console.log('Nomes dos veículos no componente pai:', nomesVeiculos);
  }
  
}
