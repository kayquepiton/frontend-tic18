import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-destaque',
  templateUrl: './destaque.component.html',
  styleUrls: ['./destaque.component.css']
})
export class DestaqueComponent implements OnInit {
  noticias: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.carregarDadosLocais();
  }

  carregarDadosLocais() {
    const caminhoLocal = 'assets/json/imagens.json';
    
    this.http.get<any[]>(caminhoLocal).subscribe(
      (data: any[]) => {
        console.log('Dados do JSON local:', data);
        this.noticias = data;
      },
      error => {
        console.error('Erro ao carregar o JSON local.', error);
      }
    );
  }
}
