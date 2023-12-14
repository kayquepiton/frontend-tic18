import { Component } from '@angular/core';

@Component({
  selector: 'app-arara',
  templateUrl: './arara.component.html',
  styleUrls: ['./arara.component.css']
})
export class AraraComponent {
  permissao: string = '';
  permissoesValidas: string[] = ['root', 'admin', 'visitante'];
  isPermissaoValida: boolean = false;
  mensagem: string = '';

  onLogando(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.permissao = inputElement.value;
    this.isPermissaoValida = this.permissoesValidas.includes(this.permissao);
  }

  onLogin() {
    this.mensagem = this.isPermissaoValida ? `Bem-vindo ${this.permissao}, você está logado.` : 'Permissão inválida.';
  }
}
