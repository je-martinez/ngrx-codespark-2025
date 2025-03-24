import { Component, inject, input, output } from '@angular/core';
import { Product } from '../../types';
import { CartFacade } from '../../store/cart';

@Component({
  selector: 'product-item-component',
  imports: [],
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent {
  product = input<Product>();
  onAddToCart = output<Product>();

  get title() {
    return this.product()?.title;
  }

  get image() {
    return this.product()?.image;
  }

  get description() {
    return this.product()?.description;
  }

  get price() {
    return this.product()?.price;
  }

  get formattedPrice() {
    return `$${this.price?.toFixed(2)}`;
  }

  addToCart() {
    this.onAddToCart.emit(this.product()!);
  }
}
