import { Component } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
@Component({
  selector: 'product-list-component',
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {}
