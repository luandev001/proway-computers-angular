import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() { }

  obtemCarrinho() {
    this.itens = JSON.parse(localStorage.getItem("carrinho")  || "[]"); // JSON.parse --> Converterá de string para objeto
    return this.itens;
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho) {
    this.itens.push(produto); 
    localStorage.setItem("carrinho", JSON.stringify(this.itens));// JSON.stringify --> Converterá de Objeto para string  
  }

  removerProdutoCarrinho( produtoId: number) {
    this.itens = this.itens.filter( item => item.id !== produtoId );
    localStorage.setItem("carrinho", JSON.stringify(this.itens));// JSON.stringify --> Converterá de Objeto para string 
  }

  limparCarrinho() {
    this.itens = [];
    localStorage.clear();
  }
}
