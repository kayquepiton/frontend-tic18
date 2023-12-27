// propriedades.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-propriedades',
  templateUrl: './propriedades.component.html',
  styleUrls: ['./propriedades.component.css']
})
export class PropriedadesComponent {
  @Input() veiculos: any[] = [];
  @Input() veiculoSelecionado: any;
  @Input() itensVeiculoSelecionado: any;
  
  // Adicione o EventEmitter para emitir o evento de seleção de veículo
  @Output() selecionarVeiculo = new EventEmitter<string>();

  getNomesVeiculos(): string[] {
    // Certifique-se de verificar se this.veiculoSelecionado não é nulo
    if (this.veiculoSelecionado) {
      // Extrai os títulos dos arrays
      return Object.keys(this.veiculoSelecionado);
    } else {
      return [];
    }
  }

  emitirVeiculoSelecionado(veiculo: string) {
    this.selecionarVeiculo.emit(veiculo);
  }
}
