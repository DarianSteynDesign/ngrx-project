import { createAction, props } from '@ngrx/store';
import { CartProduct } from '../models/cart-product';

export const loadCartProducts = createAction(
  '[Product] Add Product',
  (cartProduct: CartProduct) => ({cartProduct})
);

export const removeCartProducts = createAction(
  '[Product] Remove Product',
  (cartProduct: CartProduct) => ({cartProduct})
);




