import { Component } from '@angular/core';
import { WikiService } from '../wiki.service';

@Component({
  selector: 'app-aula8',
  templateUrl: './aula8.component.html',
  styleUrls: ['./aula8.component.css'],
})
export class Aula8Component {
  term = '';
  results: any[] = []; // Certifique-se de inicializar como um array vazio

  constructor(private wikiService: WikiService) {}

  onSearch(term: string): void {
    this.term = term;
    this.wikiService.search(term).subscribe((data: any) => {
      // Extraia a lista de resultados do objeto
      this.results = data.query.search;
    });
  }
}
