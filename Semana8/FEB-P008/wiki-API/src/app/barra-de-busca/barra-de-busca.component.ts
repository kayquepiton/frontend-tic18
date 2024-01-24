// barra-de-busca.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { WikipediaService } from '../wikipedia.service';

@Component({
  selector: 'app-barra-de-busca',
  templateUrl: './barra-de-busca.component.html',
  styleUrls: ['./barra-de-busca.component.css']
})
export class BarraDeBuscaComponent {
  term: string = '';
  @Output() onSearch = new EventEmitter<any[]>(); // Especifique o tipo apropriado aqui

  constructor(private wikipediaService: WikipediaService) { }

  search(term: string): void {
    this.wikipediaService.search(term).subscribe((results: any[]) => {
      this.onSearch.emit(results);
    });
  }
}
