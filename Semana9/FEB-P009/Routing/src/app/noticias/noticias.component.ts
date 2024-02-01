// noticias.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  noticias: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.buscarDados('science'); // Passando 'science' como a categoria desejada
  }

  buscarDados(categoria: string) {
    this.apiService.buscarDadosAPI(categoria).subscribe(
      (data: any) => {
        if (data.status === 'ok' && Array.isArray(data.articles)) {
          this.noticias = data.articles.slice(0, 2);
          console.log(this.noticias);
        }
      },
      error => {
        console.error('Erro ao buscar dados da API para Notícias:', error);
      }
    );
  }
}
