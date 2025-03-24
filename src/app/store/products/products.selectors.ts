import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProducts from './products.reducer';

export const selectProductsState = createFeatureSelector<fromProducts.State>(
  fromProducts.productsFeatureKey
);

export const selectProducts = createSelector(
  selectProductsState,
  (state) => state.products
);

export const selectProductsLoading = createSelector(
  selectProductsState,
  (state) => state.loading
);

export const selectProductsError = createSelector(
  selectProductsState,
  (state) => state.error
);
