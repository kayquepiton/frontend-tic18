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
  @Output() selecionarVeiculo = new EventEmitter<any>();
  @Output() nomesVeiculosSelecionados = new EventEmitter<string[]>();

  emitirNomesVeiculosSelecionados() {
    const nomesVeiculos: string[] = this.obterNomesVeiculos();

    if (nomesVeiculos && nomesVeiculos.length > 0) {
      this.nomesVeiculosSelecionados.emit(nomesVeiculos);
    }
  }

  private obterNomesVeiculos(): string[] {
    // Implemente a lógica para obter os nomes dos veículos aqui
    return ['Veiculo1', 'Veiculo2', 'Veiculo3'];  // Substitua pelo seu código real
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Código removido
  }

  selecionarVeiculoClick(veiculo: any) {
    this.selecionarVeiculo.emit(veiculo);
  }

  emitirVeiculoSelecionado(veiculo: string) {
    this.selecionarVeiculo.emit(veiculo);
  }
}
