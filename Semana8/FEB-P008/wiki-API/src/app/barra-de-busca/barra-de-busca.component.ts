//barra-de-busca.component.ts

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-barra-de-busca',
  templateUrl: './barra-de-busca.component.html',
})
export class BarraDeBuscaComponent {
  term = '';
  @Output() search = new EventEmitter<string>();

  onSearch() {
    this.search.emit(this.term);
  }
}