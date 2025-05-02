import { Routes } from '@angular/router';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';

export const produtosRoutes: Routes = [
  {path: '',component: ProdutosComponent},
  {path: ':id', component: DetalhesProdutoComponent}
];
