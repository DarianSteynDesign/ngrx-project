import { Action, createReducer, on } from '@ngrx/store';
import * as CustomerActions from '../actions/cart-product.actions';
import { CartProduct } from '../models/cart-product';


export const cartProductFeatureKey = 'cartProduct';

export interface CartProductState {
  products: CartProduct[];
}

export const initialState: CartProductState = {
  products: []
};

export const customerReducer = createReducer(
  initialState,
  on(CustomerActions.loadCartProducts,
  (state: CartProductState, {cartProduct}) =>
  ({...state,
    products: [...state.products, cartProduct]
  }))
);

export function reducer(state: CartProductState | undefined, action: Action): any {
  return customerReducer(state, action);
}
