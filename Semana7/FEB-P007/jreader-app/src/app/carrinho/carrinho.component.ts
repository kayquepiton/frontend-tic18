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
    console.log('Botão 1 clicado');
  }

  acaoBotao2() {
    // Lógica para o botão 2
    console.log('Botão 2 clicado');
  }

  acaoBotao3() {
    // Lógica para o botão 3
    console.log('Botão 3 clicado');
  }
}
