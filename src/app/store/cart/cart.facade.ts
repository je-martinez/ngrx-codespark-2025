import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../../types';
import { CartActions } from './cart.actions';
import {
  selectCartItems,
  selectCartQuantity,
  selectCartTotal,
  selectNumberOfItems,
} from './cart.selectors';

@Injectable({
  providedIn: 'root',
})
export class CartFacade {
  private store = inject(Store);

  addToCart(product: Product) {
    this.store.dispatch(CartActions.addToCart({ product }));
  }

  removeFromCart(productId: number) {
    this.store.dispatch(CartActions.removeFromCart({ productId }));
  }

  clearCart() {
    this.store.dispatch(CartActions.clearCart());
  }

  increaseQuantity(productId: number) {
    this.store.dispatch(CartActions.increaseQuantity({ productId }));
  }

  decreaseQuantity(productId: number) {
    this.store.dispatch(CartActions.decreaseQuantity({ productId }));
  }

  getNumberOfItems() {
    return this.store.select(selectNumberOfItems);
  }

  getCartItems() {
    return this.store.select(selectCartItems);
  }

  getCartTotal() {
    return this.store.select(selectCartTotal);
  }

  getCartQuantity() {
    return this.store.select(selectCartQuantity);
  }
}
