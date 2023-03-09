import { createAction, props } from '@ngrx/store';
import { CartProduct } from '../models/cart-product';

export const loadCartProducts = createAction(
  '[Customer] Add Customer',
  (cartProduct: CartProduct) => ({cartProduct})
);




