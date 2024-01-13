// adicionar-objeto.component.ts
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionar-objeto',
  templateUrl: './adicionar-objeto.component.html',
  styleUrls: ['./adicionar-objeto.component.css'],
})
export class AdicionarObjetoComponent implements OnInit {
  @Input() veiculoSelecionado: string | { Name: string } | null = null;
  veiculoSelecionadoNome: string | null = null;

  ngOnInit() {
    this.extrairNomeVeiculoSelecionado();
  }

  extrairNomeVeiculoSelecionado() {
    if (this.veiculoSelecionado !== null) {
      if (typeof this.veiculoSelecionado === 'string') {
        this.veiculoSelecionadoNome = this.veiculoSelecionado;
      } else {
        this.veiculoSelecionadoNome = this.veiculoSelecionado.Name || null;
      }
    } else {
      this.veiculoSelecionadoNome = null;
    }
  }

  adicionarVeiculo() {
    // Lógica para o botão Laranja (nome do veículo)
    console.log('Botão Laranja clicado para veículo:', this.veiculoSelecionadoNome);
  }

  adicionarObjeto() {
    // Lógica para o botão Azul (Adicionar)
    console.log('Botão Azul (Adicionar) clicado');
  }
}
