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

  // Variável para controlar a exibição do componente app-adicionar-objeto
  mostrarAdicionarObjeto: boolean = false;

  onCategoriaSelecionada(categoria: string) {
    this.categoriaSelecionada = categoria;
    console.log('Categoria selecionada:', categoria);
  }

  onVeiculosSelecionados(veiculos: { Name: string }[]) {
    this.veiculos = veiculos;
    console.log('Veículos no componente pai:', veiculos);
  }

  onVeiculoSelecionado(veiculo: string) {
    this.veiculoSelecionado = veiculo;
    console.log('Veículo selecionado:', veiculo);
  }

  onNomesVeiculosSelecionados(nomesVeiculos: string[]) {
    // Implemente a lógica necessária aqui
    console.log('Nomes dos veículos no componente pai:', nomesVeiculos);
  }

  // Método para lidar com a seleção do título em propriedades
  onTituloSelecionado(titulo: string) {
    this.tituloSelecionado = titulo;
    console.log('Título selecionado:', titulo);

    // Mostrar o componente app-adicionar-objeto quando o título for selecionado
    this.mostrarAdicionarObjeto = true;
  }
}
