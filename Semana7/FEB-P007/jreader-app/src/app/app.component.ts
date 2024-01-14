// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categoriaSelecionada: string | null = null;
  veiculos: { Name: string }[] = [];
  veiculoSelecionado: string | null = null;
  nomesVeiculos: string[] = [];
  tituloSelecionado: string | null = null;
  mostrarAdicionarObjeto: boolean = false;

  onCategoriaSelecionada(categoria: string) {
    this.categoriaSelecionada = categoria;
  }

  onVeiculosSelecionados(veiculos: { Name: string }[]) {
    this.veiculos = veiculos;
  }

  onVeiculoSelecionado(veiculo: string) {
    this.veiculoSelecionado = veiculo;
  }

  onNomesVeiculosSelecionados(nomesVeiculos: string[]) {
    // Implemente a lógica necessária aqui
  }

  onTituloSelecionado(titulo: string) {
    this.tituloSelecionado = titulo;
    this.mostrarAdicionarObjeto = true;
  }
}
