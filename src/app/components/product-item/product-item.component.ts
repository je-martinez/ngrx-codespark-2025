import { Component, input } from '@angular/core';
import { Product } from '../../types';

@Component({
  selector: 'product-item-component',
  imports: [],
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent {
  product = input<Product>();

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
    return `$${this.product()?.price}`;
  }
}
