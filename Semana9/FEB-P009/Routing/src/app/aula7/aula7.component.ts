// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'aula7-root',
  templateUrl: './aula7.component.html',
  styleUrls: ['./aula7.component.css']
})
export class Aula7Component {
  categoriaSelecionada: string | null = null;
  veiculos: { Name: string }[] = [];
  veiculoSelecionado: string | null = null;
  nomesVeiculos: string[] = [];
  tituloSelecionado: string | null = null;
  mostrarAdicionarObjeto: boolean = false;
  exibirBotoesRodape: boolean = false;

  onCategoriaSelecionada(categoria: string) {
    this.categoriaSelecionada = categoria;
  }

  onVeiculosSelecionados(veiculos: { Name: string }[]) {
    this.veiculos = veiculos;
  }

  onVeiculoSelecionado(veiculo: string) {
    this.veiculoSelecionado = veiculo;
  }

  onNomesVeiculosSelecionados(nomesVeiculos: string[]) {
    // Implemente a lógica necessária aqui
  }

  onTituloSelecionado(titulo: string) {
    this.tituloSelecionado = titulo;
    this.mostrarAdicionarObjeto = true;
  }

  onAdicionarAoCarrinhoClicado(nomeVeiculo: string) {
    // Lógica para quando o botão "Adicionar ao carrinho" for clicado
    // Não há console.log aqui

    // Adiciona o nome do veículo à lista de nomesVeiculos
    this.nomesVeiculos.push(nomeVeiculo);

    // Define a visibilidade dos botões no rodapé como true
    this.exibirBotoesRodape = true;
  }
}
