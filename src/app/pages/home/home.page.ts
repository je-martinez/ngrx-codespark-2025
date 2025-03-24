import { Component, inject, OnInit } from '@angular/core';
import { ProductListComponent, LoadingComponent } from '../../components';
import { ProductsFacade } from '../../store/products/products.facade';
import { AsyncPipe, NgIf } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'home-page',
  imports: [ProductListComponent, AsyncPipe, LoadingComponent, NgIf],
  providers: [ProductsFacade],
  templateUrl: './home.page.html',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms ease-in', style({ opacity: 0 }))]),
    ]),
  ],
})
export class HomePage implements OnInit {
  private productsFacade = inject(ProductsFacade);

  products$ = this.productsFacade.selectProducts();
  productsLoading$ = this.productsFacade.selectProductsLoading();
  productsError$ = this.productsFacade.selectProductsError();

  ngOnInit(): void {
    this.productsFacade.fetchProducts();
  }
}
