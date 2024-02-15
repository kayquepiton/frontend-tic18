import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrls: ['./objetos.component.css']
})
export class ObjetosComponent implements OnInit {
  categoriaSelecionada: string | null = null;
  veiculos: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.categoriaSelecionada$.subscribe(categoria => {
      this.categoriaSelecionada = categoria;
    });

    this.dataService.veiculos$.subscribe(veiculos => {
      this.veiculos = veiculos;
    });
  }

  selecionarVeiculoClick(veiculo: any) {
    this.dataService.enviarVeiculoSelecionado(veiculo); // Emitir o veículo selecionado via serviço
  }
}
