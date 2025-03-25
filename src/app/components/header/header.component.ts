import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartFacade } from '../../store/cart';
import { AsyncPipe } from '@angular/common';
import { GeolocationService } from '../../services/geolocation.service';
import { GeolocationFacade } from '../../store/geolocation';

@Component({
  selector: 'header-component',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private cartFacade = inject(CartFacade);
  private geolocationFacade = inject(GeolocationFacade);
  quantity$ = this.cartFacade.getNumberOfItems();

  currentCity$ = this.geolocationFacade.selectCity();
}
