//resultado-da-pesquisa.component.ts

import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-resultado-de-pesquisa',
  template: '<div *ngFor="let result of results">{{ highlight(result.snippet) }}</div>' // Altere para um template inline
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