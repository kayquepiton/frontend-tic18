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
  @Output() selecionarVeiculos = new EventEmitter<Veiculo[]>();
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
    this.emitirVeiculos(categoria);
  }
  

  emitirVeiculos(categoria: string) {
    const veiculos: Veiculo[] = this.jsonData[categoria] || [];
    this.selecionarVeiculos.emit(veiculos);

    // Adicione esta linha para imprimir os veículos no console
    console.log('Veículos emitidos:', veiculos);
  }
  
}
