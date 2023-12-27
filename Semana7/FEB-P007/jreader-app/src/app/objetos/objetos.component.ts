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

  @Output() nomesVeiculosSelecionados = new EventEmitter<string[]>();

  // Método onde você obtém os nomes dos veículos e emite o evento
  emitirNomesVeiculosSelecionados() {
    // Lógica para obter os nomes dos veículos
    const nomesVeiculos: string[] = this.obterNomesVeiculos();

    // Verifica se nomesVeiculos é um array válido antes de emitir o evento
    if (nomesVeiculos && nomesVeiculos.length > 0) {
      this.nomesVeiculosSelecionados.emit(nomesVeiculos);
    }
  }

  // Lógica para obter os nomes dos veículos
  private obterNomesVeiculos(): string[] {
    // Implemente a lógica para obter os nomes dos veículos aqui
    return ['Veiculo1', 'Veiculo2', 'Veiculo3'];  // Substitua pelo seu código real
  }

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
