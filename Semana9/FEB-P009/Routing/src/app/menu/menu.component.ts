import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItens: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.carregarDadosMenu();
  }

  carregarDadosMenu() {
    const caminhoMenu = 'assets/json/menu-itens.json';

    this.http.get<string[]>(caminhoMenu).subscribe(
      (data: string[]) => {
        console.log('Dados do JSON de menu:', data);
        this.menuItens = data;
      },
      error => {
        console.error('Erro ao carregar o JSON de menu.', error);
      }
    );
  }
}
