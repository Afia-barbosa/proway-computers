import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  imports: [CommonModule, FormsModule],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent implements OnInit{
  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obterCarrinho();
    this.calcularTotal();
  }

  calcularTotal(){
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
  }

  removeProdutoCarrinho(produtoId: number){
    this.itensCarrinho = this.itensCarrinho.filter(itens => itens.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.calcularTotal();
  } 

  comprar(){
    alert("Parabens, voce finalizou sua compra!");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);
  }
}
