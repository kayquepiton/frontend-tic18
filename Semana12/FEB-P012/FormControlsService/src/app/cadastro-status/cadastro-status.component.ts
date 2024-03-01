import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cadastro-status',
  templateUrl: './cadastro-status.component.html',
  styleUrls: ['./cadastro-status.component.css']
})
export class CadastroStatusComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

}
