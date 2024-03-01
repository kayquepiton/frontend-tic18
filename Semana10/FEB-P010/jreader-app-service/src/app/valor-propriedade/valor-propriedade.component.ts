import { ChangeDetectorRef, Component, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-valor-propriedade',
  templateUrl: './valor-propriedade.component.html',
  styleUrls: ['./valor-propriedade.component.css']
})
export class ValorPropriedadeComponent implements OnChanges {
  tituloSelecionado: string = '';
  valorExibido: string = '';

  constructor(private cdr: ChangeDetectorRef, private dataService: DataService) {
    this.dataService.tituloSelecionado$.subscribe(titulo => {
      this.tituloSelecionado = titulo;
      this.atualizarDetalhes();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tituloSelecionado'] && !changes['tituloSelecionado'].firstChange) {
      this.atualizarDetalhes();
    }
  }

  private atualizarDetalhes() {
    this.dataService.veiculoSelecionado$.subscribe(veiculo => {
      if (veiculo) {
        this.valorExibido = veiculo[this.tituloSelecionado];
        this.cdr.detectChanges();
      }
    });
  }
}
