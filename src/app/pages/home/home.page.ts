import { Component } from '@angular/core';
import { ProductListComponent } from '../../components';
@Component({
  selector: 'home-page',
  imports: [ProductListComponent],
  templateUrl: './home.page.html',
})
export class HomePage {}
