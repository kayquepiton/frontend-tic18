import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../paises.service';

@Component({
  selector: 'app-formulario-paises',
  templateUrl: './formulario-paises.component.html',
  styleUrls: ['./formulario-paises.component.scss']
})
export class FormularioPaisesComponent implements OnInit {
  paisesForm: FormGroup;
  cadastroRealizado: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private paisesService: PaisesService
  ) {
    this.paisesForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.paisesService.getPaises().subscribe(paises => {
      if (paises.length > 0) {
        const primeiroPais = paises[0];
        Object.keys(primeiroPais).forEach(key => {
          this.paisesForm.addControl(key, this.formBuilder.control('', Validators.required));
        });
      }
    });
  }

  onSubmit(): void {
    if (this.paisesForm.valid) {
      console.log(this.paisesForm.value);
      this.cadastroRealizado = true;
      setTimeout(() => {
        this.cadastroRealizado = false;
        this.paisesForm.reset();
      }, 3000); // Resetar após 3 segundos
    } else {
      this.markAllFieldsAsTouched(this.paisesForm);
    }
  }

  fecharPopup(): void {
    this.cadastroRealizado = false;
  }

  private markAllFieldsAsTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormGroup) {
        this.markAllFieldsAsTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  }
}
