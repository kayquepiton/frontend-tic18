// atendimento.component.ts
import { Component, OnInit } from '@angular/core';
import { IPet } from '../models/pet.model';
import { DataBaseService } from '../data-base.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.scss']
})
export class AtendimentoComponent implements OnInit {
  pets: IPet[] = [];

  constructor(private dataBaseService: DataBaseService, private router: Router) { }

  ngOnInit(): void {
    this.fetchPets();
  }

  fetchPets(): void {
    this.dataBaseService.getPets()
      .subscribe(
        (data: IPet[]) => {
          this.pets = data;
        },
        (error: any) => {
          console.error('Ocorreu um erro ao buscar os pets:', error);
        }
      );
  }

  removePet(pet: IPet): void {
    if (pet.id) {
      this.dataBaseService.deletePet(pet.id)
        .subscribe(
          () => {
            console.log('Pet excluído com sucesso.');
            this.fetchPets();
          },
          (error: any) => {
            console.error('Ocorreu um erro ao excluir o pet:', error);
          }
        );
    } else {
      console.error('ID do pet é indefinido.');
    }
  }
}
