import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  nomesVeiculos: string[] = [];
  exibirBotoesRodape: boolean = true;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.carrinho$.subscribe(veiculos => {
      this.nomesVeiculos = veiculos;
    });
  }
}
