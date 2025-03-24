import { Routes } from '@angular/router';
import { HomePage, CartPage } from './pages';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/store/store.layout').then((m) => m.StoreLayout),
    children: [
      {
        path: '',
        component: HomePage,
      },
      {
        path: 'cart',
        component: CartPage,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];
