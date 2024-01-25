//app.component.ts

import { Component } from '@angular/core';
import { WikiService } from './wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  results = [];
  term = '';

  constructor(private wikiService: WikiService) {}

  onSearch(term: string) {
    this.term = term;
    this.wikiService.search(term).subscribe(results => this.results = results);
  }
}