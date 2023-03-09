import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartProduct } from './models/cart-product';
import { CartProductState } from './reducers/cart-product.reducer';
import { selectProducts } from './selectors/cart-product.selectors';
import { loadCartProducts, removeCartProducts } from './actions/cart-product.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx';
  products$: Observable<CartProduct[]>;
  
  constructor(private store: Store<CartProductState>) {
    this.products$ = this.store.pipe(select(selectProducts));
  }

  addProduct(productName: string): void {
    const product = new CartProduct();
    product.name = productName;
    this.store.dispatch(loadCartProducts(product));
  }

  removeProduct(productName: string): void {
    const product = new CartProduct();
    product.name = productName;
    this.store.dispatch(removeCartProducts(product));
  }
}
