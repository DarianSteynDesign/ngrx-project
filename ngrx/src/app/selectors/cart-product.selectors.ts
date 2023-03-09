import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCart from '../reducers/cart-product.reducer';

export const selectCartState = createFeatureSelector<fromCart.CartProductState>(
    fromCart.cartProductFeatureKey
);

export const selectProducts = createSelector(
    selectCartState,
    (state: fromCart.CartProductState) => state.products
);