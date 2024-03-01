import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-propriedades',
  templateUrl: './propriedades.component.html',
  styleUrls: ['./propriedades.component.css']
})
export class PropriedadesComponent {
  @Input() veiculos: any[] = [];
  @Output() selecionarTitulo = new EventEmitter<string>();
  veiculoSelecionado: any;
  tituloSelecionado: string = '';

  constructor(private dataService: DataService) {
    this.dataService.veiculoSelecionado$.subscribe(veiculo => {
      this.veiculoSelecionado = veiculo;
    });

    this.dataService.tituloSelecionado$.subscribe(titulo => {
      this.tituloSelecionado = titulo;
    });
  }

  emitirTituloSelecionado(titulo: string) {
    this.dataService.enviarTituloSelecionado(titulo);
  }

  getNomesVeiculos(): string[] {
    if (this.veiculoSelecionado) {
      return Object.keys(this.veiculoSelecionado);
    } else {
      return [];
    }
  }
}
