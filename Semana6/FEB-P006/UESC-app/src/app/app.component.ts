import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit() {
    // Define o título inicial da aba
    this.titleService.setTitle('UESC-app');
  }

  alterarTitulo() {
    // Método para alterar dinamicamente o título da aba
    this.titleService.setTitle('Novo Título da Aba');
  }
}
