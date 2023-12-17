import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  resultados: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.buscarDados('health'); // Escolha o tópico "health"
  }

  buscarDados(tópico: string) {
    this.apiService.buscarDadosAPI(tópico).subscribe(
      (data: any) => {
        if (data.status === 'ok' && Array.isArray(data.articles)) {
          this.resultados = data.articles.slice(0, 2);
          console.log(this.resultados);
        }
      },
      error => {
        console.error('Erro ao buscar dados da API para Resultados:', error);
      }
    );
  }
}
