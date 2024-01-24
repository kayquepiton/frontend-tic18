import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultado-da-pesquisa',
  templateUrl: './resultado-da-pesquisa.component.html',
  styleUrls: ['./resultado-da-pesquisa.component.css']
})
export class ResultadoDaPesquisaComponent {
  @Input() results: any[] = [];
}
