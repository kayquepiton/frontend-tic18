// objetos.component.ts

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrls: ['./objetos.component.css']
})
export class ObjetosComponent implements OnChanges {
  @Input() categoriaSelecionada: string | null = null;
  @Input() veiculos: { Name: string }[] = [];
  @Input() nomesVeiculos: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['veiculos'] && changes['veiculos'].currentValue) {
      const veiculos = changes['veiculos'].currentValue as { Name: string }[];
      console.log('Veículos recebidos:', veiculos);

      // Adicione o código para processar o array completo de veículos conforme necessário.
    }
  }
}
