import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CadastroStatusComponent } from '../cadastro-status/cadastro-status.component';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {
  userForm: FormGroup;
  genders = ['Masculino', 'Feminino', 'Outro'];
  professions = ['Engenheiro', 'Médico', 'Cientista', 'Professor', 'Artista', 'Outro'];

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(12), Validators.pattern(/^\S*$/)]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        this.uppercaseLetterValidator,
        this.lowercaseLetterValidator,
        this.symbolValidator
      ]],
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.pattern(/^([^\s]+\s)*[^\s]+$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3,4}-[0-9]{4}$/)]],
      address: ['', Validators.required],
      birthDate: ['', [Validators.required, this.ageValidator]],
      gender: ['', Validators.required],
      profession: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.userForm.valid) {
      const user = this.userForm.value;
      console.log(user);
      this.openSuccessDialog();
    } else {
      Object.values(this.userForm.controls).forEach(control => {
        control.markAsTouched();
      });
      this.openErrorDialog();
    }
  }

  ageValidator(control: AbstractControl): ValidationErrors | null {
    const birthDate = new Date(control.value);
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    return age >= 18 ? null : { underage: true };
  }

  uppercaseLetterValidator(control: AbstractControl): ValidationErrors | null {
    if (!/[A-Z]/.test(control.value)) {
      return { 'uppercaseLetter': true };
    }
    return null;
  }

  lowercaseLetterValidator(control: AbstractControl): ValidationErrors | null {
    if (!/[a-z]/.test(control.value)) {
      return { 'lowercaseLetter': true };
    }
    return null;
  }

  symbolValidator(control: AbstractControl): ValidationErrors | null {
    if (!/[!@#$&*]/.test(control.value)) {
      return { 'symbol': true };
    }
    return null;
  }

  openSuccessDialog(): void {
    this.dialog.open(CadastroStatusComponent, {
      width: '300px',
      data: { message: 'Cadastro realizado com sucesso!' }
    });
  }

  openErrorDialog(): void {
    this.dialog.open(CadastroStatusComponent, {
      width: '300px',
      data: { message: 'Erro ao realizar o cadastro. Por favor, verifique os campos e tente novamente.' }
    });
  }
}
