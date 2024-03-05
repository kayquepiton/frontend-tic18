import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataBaseService } from '../data-base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-pet',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dataBaseService: DataBaseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      type: [''],
      breed: ['', Validators.required],
      weight: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      medicines: ['', Validators.required],
      exams: ['', Validators.required],
      infos: ['']
    });
  }

  addPet(): void {
    if (this.form.valid) {
      this.dataBaseService.addPet(this.form.value).subscribe({
        next: () => {
          console.log('Cadastro realizado com sucesso!');
          alert('Cadastro realizado com sucesso!');
          this.router.navigate(['atendimentos']);
          this.form.reset(); // Limpa os campos do formulário
        },
        error: (erro) => {
          console.error('Erro ao cadastrar pet:', erro);
          alert('Ocorreu um erro ao cadastrar o pet. Por favor, tente novamente.');
        }
      });
    } else {
      alert('Por favor, preencha todos os campos obrigatórios corretamente.');
    }
  }
}
