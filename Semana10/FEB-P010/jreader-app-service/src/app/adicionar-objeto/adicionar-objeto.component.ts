import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-adicionar-objeto',
  templateUrl: './adicionar-objeto.component.html',
  styleUrls: ['./adicionar-objeto.component.css']
})
export class AdicionarObjetoComponent {
  veiculoSelecionado: any;
  tituloSelecionado: string = '';

  constructor(private dataService: DataService) {
    // Se inscreve para receber atualizações do veículo selecionado e do título selecionado
    this.dataService.veiculoSelecionado$.subscribe(veiculo => {
      this.veiculoSelecionado = veiculo;
    });

    this.dataService.tituloSelecionado$.subscribe(titulo => {
      this.tituloSelecionado = titulo;
    });
  }

  emitirTituloSelecionado(titulo: string) {
    // Emite o título selecionado para o serviço de dados
    this.dataService.enviarTituloSelecionado(titulo);
  }

  onAdicionarAoCarrinho() {
    // Verifica se há um veículo selecionado e, em caso afirmativo, adiciona ao carrinho
    if (this.veiculoSelecionado && this.veiculoSelecionado.Name) {
      this.dataService.adicionarAoCarrinho(this.veiculoSelecionado.Name);
    }
  }

  getNomesVeiculos(): string[] {
    if (this.veiculoSelecionado) {
      return Object.keys(this.veiculoSelecionado);
    } else {
      return [];
    }
  }
}
