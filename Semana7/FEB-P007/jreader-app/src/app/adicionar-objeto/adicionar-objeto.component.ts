// adicionar-objeto.component.ts
import { ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-adicionar-objeto',
  templateUrl: './adicionar-objeto.component.html',
  styleUrls: ['./adicionar-objeto.component.css'],
})
export class AdicionarObjetoComponent implements OnChanges {
  constructor(private cdr: ChangeDetectorRef) {}
  @Input() tituloSelecionado: string = '';
  @Input() veiculoSelecionado: any;
  valorExibido: string = ''; // Adicionamos uma propriedade para armazenar o valor exibido

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tituloSelecionado'] && !changes['tituloSelecionado'].firstChange) {
      this.exibirDetalhes();
    }
  }

  ngAfterViewInit() {
    console.log('Título Selecionado:', this.tituloSelecionado);
    console.log('Veículo Selecionado:', this.veiculoSelecionado);
    this.exibirDetalhes();
    console.log('Valor Exibido:', this.valorExibido);
  
    // Força a detecção de mudanças manualmente
    this.cdr.detectChanges();
  }  

  exibirDetalhes() {
    console.log(`Título Selecionado: ${this.tituloSelecionado}`);
    this.valorExibido = this.veiculoSelecionado[this.tituloSelecionado];
  }

  exibirValor() {
    this.valorExibido = this.veiculoSelecionado[this.tituloSelecionado];
    console.log(`Valor do Título: ${this.veiculoSelecionado[this.tituloSelecionado]}`);
  }
}
