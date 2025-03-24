import { Component, input } from '@angular/core';

@Component({
  selector: 'checkout-summary-component',
  imports: [],
  templateUrl: './checkout-summary.component.html',
})
export class CheckoutSummaryComponent {
  total = input<number>(0);

  get formattedTotal() {
    return `$${this.total()?.toFixed(2)}`;
  }
}
