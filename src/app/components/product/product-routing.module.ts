import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from '../../components/product/product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./product.component').then(m => m.ProductComponent)
      },
      {
        path: ':type',
        loadComponent: () =>
          import('./product.component').then(m => m.ProductComponent)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
