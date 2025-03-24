import { Component } from '@angular/core';
import { CheckoutItemComponent } from '../checkout-item/checkout-item.component';
import { CheckoutSummaryComponent } from '../checkout-summary/checkout-summary.component';
@Component({
  selector: 'checkout-component',
  imports: [CheckoutItemComponent, CheckoutSummaryComponent],
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent {}
