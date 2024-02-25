import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        loadComponent: () =>
          import('../../components/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'product',
        loadChildren: () =>
          import('../../components/product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'policy',
        loadComponent: () =>
          import('../../components/policy/policy.component').then(m => m.PolicyComponent)
      },
      {
        path: 'blog',
        loadComponent: () =>
          import('../../components/blog/blog.component').then(m => m.BlogComponent)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
