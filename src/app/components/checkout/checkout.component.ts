import { Component, inject } from '@angular/core';
import { CheckoutItemComponent } from '../checkout-item/checkout-item.component';
import { CheckoutSummaryComponent } from '../checkout-summary/checkout-summary.component';
import { CartFacade } from '../../store/cart';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'checkout-component',
  imports: [CheckoutItemComponent, CheckoutSummaryComponent, AsyncPipe],
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent {
  cartFacade = inject(CartFacade);
  cartItems$ = this.cartFacade.getCartItems();
  total$ = this.cartFacade.getCartTotal();
  numberOfItems$ = this.cartFacade.getNumberOfItems();
  increaseQuantity(productId: number) {
    this.cartFacade.increaseQuantity(productId);
  }

  decreaseQuantity(productId: number) {
    this.cartFacade.decreaseQuantity(productId);
  }

  removeItem(productId: number) {
    this.cartFacade.removeFromCart(productId);
  }
}
