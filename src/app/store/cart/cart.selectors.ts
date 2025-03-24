import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCart from './cart.reducer';

export const selectCartState = createFeatureSelector<fromCart.State>(
  fromCart.cartFeatureKey
);

export const selectCartItems = createSelector(
  selectCartState,
  (state) => state.items
);

export const selectNumberOfItems = createSelector(
  selectCartItems,
  (items) => items.length
);

export const selectCartTotal = createSelector(selectCartItems, (items) =>
  items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
);

export const selectCartQuantity = createSelector(selectCartItems, (items) =>
  items.reduce((acc, item) => acc + item.quantity, 0)
);
