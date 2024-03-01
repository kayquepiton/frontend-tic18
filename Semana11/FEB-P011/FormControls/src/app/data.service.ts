import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private categoriaSelecionadaSource = new BehaviorSubject<string>('');
  categoriaSelecionada$ = this.categoriaSelecionadaSource.asObservable();

  private veiculosSource = new BehaviorSubject<any[]>([]);
  veiculos$ = this.veiculosSource.asObservable();

  private veiculoSelecionadoSource = new BehaviorSubject<any>(null);
  veiculoSelecionado$ = this.veiculoSelecionadoSource.asObservable();

  private tituloSelecionadoSource = new BehaviorSubject<string>('');
  tituloSelecionado$ = this.tituloSelecionadoSource.asObservable();

  private carrinhoSource = new BehaviorSubject<any[]>([]);
  carrinho$ = this.carrinhoSource.asObservable();

  private nomesVeiculosSource = new BehaviorSubject<string[]>([]);
  nomesVeiculos$ = this.nomesVeiculosSource.asObservable();

  constructor() { }

  enviarCategoriaSelecionada(categoria: string) {
    this.categoriaSelecionadaSource.next(categoria);
  }

  enviarVeiculos(veiculos: any[]) {
    this.veiculosSource.next(veiculos);
  }

  enviarVeiculoSelecionado(veiculo: any) {
    this.veiculoSelecionadoSource.next(veiculo);
  }

  enviarTituloSelecionado(titulo: string) {
    this.tituloSelecionadoSource.next(titulo);
  }

  atualizarNomesVeiculos(nomes: string[]) {
    this.nomesVeiculosSource.next(nomes);
  }

  adicionarAoCarrinho(nomeVeiculo: string) {
    const carrinhoAtual = this.carrinhoSource.getValue();
    const novoCarrinho = [...carrinhoAtual, nomeVeiculo];
    this.carrinhoSource.next(novoCarrinho);
  }
  
  
}
