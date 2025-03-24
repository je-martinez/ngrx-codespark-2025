import { createFeature, createReducer, on } from '@ngrx/store';
import { ProductsActions } from './products.actions';
import { Product } from '../../types';

export const productsFeatureKey = 'products';

export interface State {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export const initialState: State = {
  products: [],
  loading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(ProductsActions.fetchProducts, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(ProductsActions.fetchProductsSuccess, (state, action) => ({
    ...state,
    products: action.data,
    loading: false,
    error: null,
  })),
  on(ProductsActions.fetchProductsFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  }))
);

export const productsFeature = createFeature({
  name: productsFeatureKey,
  reducer,
});
