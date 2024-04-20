import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CartItem } from '../interface/cart-item.interface';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  itensDoCarrinho: CartItem[] = [
    { id: 1, name: 'Dom Casmurro - Edição Especial com Introdução e Notas de Notáveis Críticos Literários', price: 29.99, quantity: 1, image: 'assets/produtos/livros/dom-casmurro.png' },
    { id: 2, name: '1984 - Edição Definitiva com Posfácio Inédito do Autor', price: 19.99, quantity: 1, image: 'assets/produtos/livros/1984.png' },
    { id: 3, name: 'Harry Potter e a Pedra Filosofal - Box com Ilustrações Exclusivas e Capa Dura', price: 34.50, quantity: 1, image: 'assets/produtos/livros/harry-potter.png' },
    { id: 4, name: 'O Senhor dos Anéis: A Sociedade do Anel - Versão Estendida com Extras e Mapas Detalhados', price: 39.99, quantity: 1, image: 'assets/produtos/livros/senhor-dos-aneis.png' },
    { id: 5, name: 'A Metamorfose - Edição Comentada com Análise Crítica e Contextualização Histórica', price: 9.99, quantity: 1, image: 'assets/produtos/livros/metamorfose.png' },
    { id: 6, name: 'O Pequeno Príncipe - Livro de Bolso com Tradução Atualizada e Novas Ilustrações', price: 15.99, quantity: 1, image: 'assets/produtos/livros/pequeno-principe.png' },
    { id: 7, name: 'O Alquimista - Edição Especial com Prefácio do Autor e Estudo de Personagens', price: 24.99, quantity: 1, image: 'assets/produtos/livros/alquimista.png' },
    { id: 8, name: 'Crime e Castigo - Versão Anotada com Glossário de Termos Filosóficos e Psicológicos', price: 27.99, quantity: 1, image: 'assets/produtos/livros/crime-e-castigo.png' },
    { id: 9, name: 'Orgulho e Preconceito - Edição de Luxo com Capa Relevo e Papel de Alta Qualidade', price: 21.99, quantity: 1, image: 'assets/produtos/livros/orgulho-e-preconceito.png' },
    { id: 10, name: 'A Revolução dos Bichos - Análise Comparativa com Outras Obras do Autor', price: 12.99, quantity: 1, image: 'assets/produtos/livros/revolucao-dos-bichos.png' }
  ];

  listaDeItens = signal(this.itensDoCarrinho);

  precoTotal = computed(() => {
    return this.listaDeItens().reduce((acc, item) => acc + (item.price * item.quantity), 0);
  });

  showPopup = false;
  compraFinalizada = false;

  removeItem(index: number) {
    this.listaDeItens.update((items) => {
      items.splice(index, 1);
      return items;
    });
  }

  incrementQuantity(index: number) {
    this.listaDeItens.update((items) => {
      items[index].quantity++;
      return items;
    });
  }

  decrementQuantity(index: number) {
    this.listaDeItens.update((items) => {
      if (items[index].quantity > 1) {
        items[index].quantity--;
      }
      return items;
    });
  }

  carregarDadosDoCarrinho() {
    console.log('Dados do Carrinho:');
    console.log('Itens:', this.itensDoCarrinho);
    console.log('Total: R$', this.precoTotal().toFixed(2));
    this.showPopup = true; // Mostrar o pop-up
    this.compraFinalizada = true; // Indicar que a compra foi finalizada
  }

  fecharPopup() {
    this.showPopup = false; // Fechar o pop-up
  }

  limparCarrinho() {
    // Limpar o carrinho (remover todos os itens)
    this.itensDoCarrinho = [];
    // Definir compraFinalizada como false para ocultar a mensagem de compra finalizada
    this.compraFinalizada = false;
  }
  
}
