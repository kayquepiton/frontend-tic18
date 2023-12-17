import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-destaque',
  templateUrl: './destaque.component.html',
  styleUrls: ['./destaque.component.css']
})
export class DestaqueComponent implements OnInit {
  noticias: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.buscarDados('entertainment'); // Escolha o tópico "entertainment"
  }

  buscarDados(tópico: string) {
    this.apiService.buscarDadosAPI(tópico).subscribe(
      (data: any) => {
        if (data.status === 'ok' && Array.isArray(data.articles)) {
          this.noticias = data.articles.slice(0, 2); // Ajuste conforme necessário
          console.log(this.noticias);
        }
      },
      error => {
        console.error('Erro ao buscar dados da API para Destaques:', error);
      }
    );
  }
}
