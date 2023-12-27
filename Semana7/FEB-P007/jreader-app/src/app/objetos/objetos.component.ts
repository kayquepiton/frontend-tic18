// objetos.component.ts

import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrls: ['./objetos.component.css']
})
export class ObjetosComponent implements OnChanges {
  @Input() categoriaSelecionada: string | null = null;
  @Input() veiculos: { Name: string }[] = [];
  // Adicione o EventEmitter para emitir o nome do veículo selecionado
  @Output() selecionarVeiculo = new EventEmitter<any>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['veiculos'] && changes['veiculos'].currentValue) {
      const veiculos = changes['veiculos'].currentValue as { Name: string }[];
      console.log('Veículos recebidos:', veiculos);
      
      // Restante do código...
    }
  }

  // Altere o método para emitir o objeto do veículo
  selecionarVeiculoClick(veiculo: any) {
    this.selecionarVeiculo.emit(veiculo);
    console.log('Veículo selecionado foi:', veiculo);
  }

  emitirVeiculoSelecionado(veiculo: string) {
    this.selecionarVeiculo.emit(veiculo);
  }
}
