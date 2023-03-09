import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import {cartProductFeatureKey, reducer} from '../../../reducers/cart-product.reducer';
import { ProductCatalogComponent } from './product-catalog.component';

@NgModule({
  declarations: [
    ProductCatalogComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(cartProductFeatureKey, reducer)
  ],
  exports: [
    ProductCatalogComponent
  ]
})
export class ProductModule { }
