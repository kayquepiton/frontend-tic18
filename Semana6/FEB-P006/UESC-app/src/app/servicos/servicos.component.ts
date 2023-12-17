import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {
  servicos: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.buscarDados('sports'); // Escolha o tópico "sports"
  }

  buscarDados(tópico: string) {
    this.apiService.buscarDadosAPI(tópico).subscribe(
      (data: any) => {
        if (data.status === 'ok' && Array.isArray(data.articles)) {
          this.servicos = data.articles.slice(0, 2); // Ajuste conforme necessário
          console.log(this.servicos);
        }
      },
      error => {
        console.error('Erro ao buscar dados da API para Serviços:', error);
      }
    );
  }
}
