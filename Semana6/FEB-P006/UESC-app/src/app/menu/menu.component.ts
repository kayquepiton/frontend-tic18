import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // Propriedades específicas do componente, se necessário
  menuItens: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.buscarMenuItens('technology'); // Escolha o tópico "technology"
  }

  buscarMenuItens(tópico: string) {
    this.apiService.buscarDadosAPI(tópico).subscribe(
      (data: any) => {
        if (data.status === 'ok' && Array.isArray(data.articles)) {
          this.menuItens = data.articles.slice(0, 2);
          console.log(this.menuItens);
        }
      },
      error => {
        console.error('Erro ao buscar dados da API para o Menu:', error);
      }
    );
  }
}
