import { Component, OnInit } from '@angular/core';
import { IPet } from '../models/pet.model';
import { DataBaseService } from '../data-base.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-atendimento',
  templateUrl: './detalhes-atendimento.component.html',
  styleUrl: './detalhes-atendimento.component.scss'
})
export class DetalhesAtendimentoComponent implements OnInit {
  pet!: IPet

  constructor(private dataBaseService: DataBaseService, private routes: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataBaseService.getPet(this.route.snapshot.paramMap.get('id')!).subscribe(data => {
      console.log(data)
      this.pet = data
    })
  }
}
