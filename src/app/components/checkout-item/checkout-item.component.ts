import { Component, input, output } from '@angular/core';
import { CartItem } from '../../types';

@Component({
  selector: 'checkout-item-component',
  imports: [],
  templateUrl: './checkout-item.component.html',
})
export class CheckoutItemComponent {
  item = input<CartItem>();
  onIncreaseQuantity = output<void>();
  onDecreaseQuantity = output<void>();
  onRemoveItem = output<void>();

  get quantity() {
    return this.item()?.quantity;
  }

  get title() {
    return this.item()?.product.title;
  }

  get image() {
    return this.item()?.product.image;
  }

  get price() {
    return this.item()?.product.price;
  }

  get formattedPrice() {
    return `$${this.price?.toFixed(2)}`;
  }

  increaseQuantity() {
    this.onIncreaseQuantity.emit();
  }

  decreaseQuantity() {
    this.onDecreaseQuantity.emit();
  }

  removeItem() {
    this.onRemoveItem.emit();
  }
}
