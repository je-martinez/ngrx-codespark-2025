import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent, FooterComponent } from '../../components';

@Component({
  selector: 'store-layout',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './store.layout.html',
})
export class StoreLayout {}
