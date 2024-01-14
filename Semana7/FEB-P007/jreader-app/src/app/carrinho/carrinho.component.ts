// carrinho.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  @Input() nomesVeiculos: string[] = [];
  exibirBotoesRodape: boolean = true;

  acaoBotao1() {
    // Lógica para o botão 1
    // Não há console.log aqui
  }

  acaoBotao2() {
    // Lógica para o botão 2
    // Não há console.log aqui
  }

  acaoBotao3() {
    // Lógica para o botão 3
    // Não há console.log aqui
  }
}
