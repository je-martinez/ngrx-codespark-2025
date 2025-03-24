import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsActions } from './products.actions';
import {
  selectProducts,
  selectProductsError,
  selectProductsLoading,
} from './products.selectors';

@Injectable({
  providedIn: 'root',
})
export class ProductsFacade {
  private store = inject(Store);

  fetchProducts() {
    this.store.dispatch(ProductsActions.fetchProducts());
  }

  selectProducts() {
    return this.store.select(selectProducts);
  }

  selectProductsLoading() {
    return this.store.select(selectProductsLoading);
  }

  selectProductsError() {
    return this.store.select(selectProductsError);
  }
}
