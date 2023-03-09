import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCartProducts } from 'src/app/actions/cart-product.actions';
import { CartProduct } from 'src/app/models/cart-product';
import { CartProductState } from 'src/app/reducers/cart-product.reducer';

@Component({
  selector: 'product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.scss']
})
export class ProductCatalogComponent {
  constructor(private store: Store<CartProductState>) {
  }

  addProduct(productName: string): void {
    const product = new CartProduct();
    product.name = productName;
    this.store.dispatch(loadCartProducts(product));
  }
}
