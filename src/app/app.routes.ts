import { Routes } from '@angular/router';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

export const routes: Routes = [
    {
        path: 'contato',
        loadComponent: () =>
            import('./pages/contato/contato.component').then((m) => m.ContatoComponent),
      },
    {path: 'produtos', loadChildren: () => import('./produtos/produtos.routes').then(m => m.produtosRoutes)},
    {path: '', redirectTo: "produtos", pathMatch: "full"},
    {path: 'carrinho',loadChildren: () => import('./carrinho/carrinho.routes').then(m => m.carrinhoRoutes)},
    {path: '**', component: NaoEncontradoComponent}
];
