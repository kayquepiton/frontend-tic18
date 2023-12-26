// classes.component.ts

import { Component, EventEmitter, Output } from '@angular/core';

// Interface para representar o formato de um veículo
interface Veiculo {
  Name: string;
  // Adicione outros campos, se necessário
}

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {
  @Output() selecionarCategoria = new EventEmitter<string>();
  @Output() selecionarNomesVeiculos = new EventEmitter<string[]>();
  jsonData: any;

  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];
    
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.jsonData = JSON.parse(e.target.result);
        console.log('Conteúdo do arquivo JSON:', this.jsonData);
      };

      reader.readAsText(selectedFile);
    }
  }

  emitirCategoria(categoria: string) {
    console.log('Método emitirCategoria chamado com categoria:', categoria);
    this.selecionarCategoria.emit(categoria);
    this.emitirNomesVeiculos(categoria);
  }
  

  emitirNomesVeiculos(categoria: string) {
    const veiculos: Veiculo[] = this.jsonData[categoria] || [];
    const nomesVeiculos = veiculos.slice(0, 3).map(veiculo => veiculo.Name);
    this.selecionarNomesVeiculos.emit(nomesVeiculos);
  
    // Adicione esta linha para imprimir os nomes dos veículos no console
    console.log('Nomes dos veículos emitidos:', nomesVeiculos);
  }
  
}
