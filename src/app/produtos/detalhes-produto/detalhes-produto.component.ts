  import { Component, OnInit } from '@angular/core';
  import { ProdutosService } from '../../produtos.service';
  import { IProduto, IProdutoCarrinho } from '../../produtos';
  import { ActivatedRoute } from '@angular/router';
  import { FormsModule } from '@angular/forms';
  import { CommonModule } from '@angular/common';
  import { NotificacaoService } from '../../notificacao.service';
  import { CarrinhoService } from '../../carrinho.service';

  @Component({
    selector: 'app-detalhes-produto',
    imports: [FormsModule, CommonModule],
    templateUrl: './detalhes-produto.component.html',
    styleUrl: './detalhes-produto.component.css'
  })
  export class DetalhesProdutoComponent implements OnInit{

    produto: IProduto | undefined;
    quantidade = 1;

    constructor(
      private produtoService: ProdutosService,
      private route: ActivatedRoute,
      private notificacaoServe: NotificacaoService,
      private carrinhoService: CarrinhoService
    ){}

    ngOnInit(): void {
      const routeParams = this.route.snapshot.paramMap;
      const produtoId = Number(routeParams.get("id"));
      this.produto = this.produtoService.getOne(produtoId);
    }

    adicionarAoCarrinho(){
      this.notificacaoServe.notificar("Produto adicionado no carrinho!");
      const produto: IProdutoCarrinho = {
        ...this.produto!,
        quantidade: this.quantidade
      }
      this.carrinhoService.adicionarCarrinho(produto);
    }

  }
