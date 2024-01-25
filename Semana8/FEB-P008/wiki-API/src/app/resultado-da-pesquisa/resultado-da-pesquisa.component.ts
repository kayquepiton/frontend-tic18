import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-resultado-de-pesquisa',
  template: `
    <div *ngFor="let result of results" class="result-item">
      <h2 [innerHTML]="highlight(result.title)"></h2>
      <p [innerHTML]="highlight(result.snippet)"></p>
      <a [href]="'https://pt.wikipedia.org/?curid=' + result.pageid">Leia mais...</a>
    </div>
  `,
  styles: [`
    .result-item {
      margin-bottom: 20px;
      border: 1px solid #ccc;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
      transition: box-shadow 0.3s ease-in-out;
      background-color: #f9f9f9;
    }

    .result-item:hover {
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }

    .result-item h2 {
      color: #333;
      font-size: 1.5em;
      margin-bottom: 10px;
    }

    .result-item p {
      color: #666;
      line-height: 1.6;
      margin-bottom: 10px;
    }

    .result-item a {
      display: inline-block;
      margin-top: 10px;
      color: #0087cc;
      text-decoration: none;
    }

    .result-item a:hover {
      text-decoration: underline;
    }
  `]
})
export class ResultadoDePesquisaComponent {
  @Input() results: any[] = [];
  @Input() term: string = '';

  constructor(private sanitizer: DomSanitizer) {}

  highlight(text: string) {
    const regex = new RegExp(`(${this.term})`, 'gi');
    const highlighted = text.replace(regex, '<strong>$1</strong>');
    return this.sanitizer.bypassSecurityTrustHtml(highlighted);
  }
}
