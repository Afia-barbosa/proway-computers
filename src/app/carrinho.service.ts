import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private carrinhoSubject = new BehaviorSubject<IProdutoCarrinho[]>(this.obterCarrinho());
  carrinho$ = this.carrinhoSubject.asObservable();
  itens: IProdutoCarrinho[] = [];

  constructor() { }

  obterCarrinho(): IProdutoCarrinho[] {
    this.itens =  JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens;
  }

  adicionarCarrinho(produto: IProdutoCarrinho): void {
    const carrinhoAtual = this.obterCarrinho();
    carrinhoAtual.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(carrinhoAtual));
    this.carrinhoSubject.next(carrinhoAtual); 
  }

  removerProdutoCarrinho(produtoId: number){
    this.itens = this.itens.filter(itens => itens.id !== produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
    this.carrinhoSubject.next(this.itens);

  }

  limparCarrinho(): void {
    localStorage.removeItem("carrinho");
    this.carrinhoSubject.next([]); 
  }
}
