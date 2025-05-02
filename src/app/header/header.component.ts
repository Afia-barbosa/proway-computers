import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {

  quantidadeCarrinho = 0;
  carrinhoSubscription!: Subscription;

  constructor(
    public carrinhoService: CarrinhoService 
  ) {}

  ngOnInit(): void {
    // Aqui é onde a mágica acontece ✨
    this.carrinhoSubscription = this.carrinhoService.carrinho$.subscribe(carrinho => {
      this.quantidadeCarrinho = carrinho.length;
      console.log('Carrinho atualizado! Qtd:', this.quantidadeCarrinho);
    });
  }

  ngOnDestroy(): void {
    // Evita vazamento de memória (boas práticas, bebê!)
    if (this.carrinhoSubscription) {
      this.carrinhoSubscription.unsubscribe();
    }
  }
}
