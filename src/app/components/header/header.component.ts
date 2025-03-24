import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartFacade } from '../../store/cart';
import { AsyncPipe } from '@angular/common';
import { GeolocationService } from '../../services/geolocation.service';

@Component({
  selector: 'header-component',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  private cartFacade = inject(CartFacade);
  private geolocation = inject(GeolocationService);
  quantity$ = this.cartFacade.getNumberOfItems();

  currentCity: string = "";

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((val) => {
      this.geolocation.getCurrentCity(val).subscribe((response) => {
        this.currentCity = response.results[0].formatted_address;
      });
    })
  }
}
