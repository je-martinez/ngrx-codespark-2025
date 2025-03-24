import { Component, inject, input } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../../types';
import { CartFacade } from '../../store/cart';
@Component({
  selector: 'product-list-component',
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  cartFacade = inject(CartFacade);
  products = input<Product[]>([]);

  addToCart(product: Product) {
    this.cartFacade.addToCart(product);
  }
}
