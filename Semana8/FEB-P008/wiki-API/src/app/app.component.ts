import { Component } from '@angular/core';
import { WikiService } from './wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
