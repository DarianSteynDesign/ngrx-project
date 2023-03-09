import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartProduct } from './models/cart-product';
import { CartProductState } from './reducers/cart-product.reducer';
import { selectCustomers } from './selectors/cart-product.selectors';
import { loadCartProducts } from './actions/cart-product.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx';
  customers$: Observable<CartProduct[]>;
  
  constructor(private store: Store<CartProductState>) {
    this.customers$ = this.store.pipe(select(selectCustomers));
  }

  addCustomer(customerName: string): void {
    const customer = new CartProduct();
    customer.name = customerName;
    this.store.dispatch(loadCartProducts(customer));
  }
}
