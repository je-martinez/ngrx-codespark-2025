import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartFacade } from '../../store/cart';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'header-component',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private cartFacade = inject(CartFacade);
  quantity$ = this.cartFacade.getNumberOfItems();
}
