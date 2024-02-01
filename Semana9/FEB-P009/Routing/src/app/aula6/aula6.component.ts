import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-aula6',
  templateUrl: './aula6.component.html',
  styleUrls: ['./aula6.component.css']
})
export class Aula6Component implements OnInit {
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
