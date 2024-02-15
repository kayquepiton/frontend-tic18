// classes.component.ts
import { Component } from '@angular/core';
import { DataService } from '../data.service';

interface Veiculo {
  Name: string;
}

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {
  jsonData: any;

  constructor(private dataService: DataService) { }

  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];
    
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.jsonData = JSON.parse(e.target.result);
      };

      reader.readAsText(selectedFile);
    }
  }

  emitirCategoria(categoria: string) {
    this.dataService.enviarCategoriaSelecionada(categoria);
    this.emitirVeiculos(categoria);
  }

  emitirVeiculos(categoria: string) {
    const veiculos: Veiculo[] = this.jsonData[categoria] || [];
    this.dataService.enviarVeiculos(veiculos);
  }
}
