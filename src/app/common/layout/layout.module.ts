import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    LayoutComponent,
  ],
  providers: []
})
export class LayoutModule {}
