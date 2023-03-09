import { Action, createReducer, on } from '@ngrx/store';
import * as ProductActions from '../actions/cart-product.actions';
import { CartProduct } from '../models/cart-product';


export const cartProductFeatureKey = 'cartProduct';

export interface CartProductState {
  products: CartProduct[];
}

export const initialState: CartProductState = {
  products: []
};

export const addProductReducer = createReducer(
  initialState,
  on(ProductActions.loadCartProducts,
  (state: CartProductState, {cartProduct}) =>
  ({...state,
    products: [...state.products, cartProduct]
  }))
);

export const removeProductReducer = createReducer(
  initialState,
  on(ProductActions.removeCartProducts,
  (state: CartProductState, {cartProduct}) =>
  ({...state,
    products: [...state.products.filter(function(e) { return e.name !== cartProduct.name })]
  }))
);

export function reducer(state: CartProductState | undefined, action: Action): any {
  switch (action.type) {
    case '[Product] Add Product':
      return addProductReducer(state, action);
    case '[Product] Remove Product':
      return removeProductReducer(state, action);
    default:
      return addProductReducer(state, action);
  }
}
