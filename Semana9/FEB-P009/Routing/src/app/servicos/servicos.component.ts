// servicos.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {
  servicos: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.carregarServicos();
  }

  carregarServicos() {
    const jsonPath = '/assets/json/servicos.json';

    this.http.get<string[]>(jsonPath).subscribe(
      (data: string[]) => {
        console.log('Dados do JSON para Serviços:', data);
        this.servicos = data;
      },
      error => {
        console.error('Erro ao carregar o JSON para Serviços.', error);
      }
    );
  }
}
