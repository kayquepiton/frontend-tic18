// adicionar-objeto.component.ts
import { ChangeDetectorRef, Component, Input, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-adicionar-objeto',
  templateUrl: './adicionar-objeto.component.html',
  styleUrls: ['./adicionar-objeto.component.css'],
})
export class AdicionarObjetoComponent implements OnChanges {
  constructor(private cdr: ChangeDetectorRef) {}
  @Input() tituloSelecionado: string = '';
  @Input() veiculoSelecionado: any;
  valorExibido: string = '';

  @Output() adicionarAoCarrinhoClicado = new EventEmitter<string>(); // Alterado para emitir o nome do veículo

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tituloSelecionado'] && !changes['tituloSelecionado'].firstChange) {
      this.exibirDetalhes();
    }
  }

  ngAfterViewInit() {
    this.exibirDetalhes();
    this.cdr.detectChanges();
  }  

  exibirDetalhes() {
    this.valorExibido = this.veiculoSelecionado[this.tituloSelecionado];
  }

  exibirValor() {
    this.valorExibido = this.veiculoSelecionado[this.tituloSelecionado];
  }

  onAdicionarAoCarrinho() {
    // Emite o evento com o nome do veículo para notificar o componente pai
    this.adicionarAoCarrinhoClicado.emit(this.veiculoSelecionado.Name);
  }
}
