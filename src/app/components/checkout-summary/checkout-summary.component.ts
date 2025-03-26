import { Component, inject, input, output } from '@angular/core';
import { CartFacade } from '../../store/cart';

@Component({
  selector: 'checkout-summary-component',
  imports: [],
  templateUrl: './checkout-summary.component.html',
})
export class CheckoutSummaryComponent {
  total = input<number>(0);
  cartFacade = inject(CartFacade);

  get formattedTotal() {
    return `$${this.total()?.toFixed(2)}`;
  }

  onClickCheckout() {
    this.cartFacade.clearCart();
  }
}
