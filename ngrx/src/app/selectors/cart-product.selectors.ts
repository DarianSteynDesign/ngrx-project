import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCustomer from '../reducers/cart-product.reducer';

export const selectCustomerState = createFeatureSelector<fromCustomer.CartProductState>(
    fromCustomer.cartProductFeatureKey
);

export const selectCustomers = createSelector(
    selectCustomerState,
    (state: fromCustomer.CartProductState) => state.products
);