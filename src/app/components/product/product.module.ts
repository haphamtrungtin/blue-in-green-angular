import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductComponent,
    ProductRoutingModule
  ]
})
export class ProductModule { }
