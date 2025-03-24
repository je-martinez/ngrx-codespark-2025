import { Component, input } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../../types';
@Component({
  selector: 'product-list-component',
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  products = input<Product[]>([]);
}
