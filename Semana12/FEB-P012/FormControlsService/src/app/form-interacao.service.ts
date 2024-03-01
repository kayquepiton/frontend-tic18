import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormInteracaoService {
  formChanges: any = {};

  constructor() { }

  registerForm(form: FormGroup) {
    form.valueChanges.subscribe(changes => {
      this.formChanges = { ...this.formChanges, ...changes };
    });
  }

  getFormChanges() {
    return this.formChanges;
  }

  resetFormChanges() {
    this.formChanges = {};
  }
}
