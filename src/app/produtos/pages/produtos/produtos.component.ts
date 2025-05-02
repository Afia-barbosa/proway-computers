import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduto} from '../../../produtos';
import { RouterModule } from '@angular/router';
import { ProdutosService } from '../../../produtos.service';
@Component({
  selector: 'app-produtos',
  imports: [CommonModule, RouterModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] | undefined;

  constructor(
    private produtosService: ProdutosService
  ){}

  ngOnInit(): void {
    this.produtos = this.produtosService.getAll();
  }

}
