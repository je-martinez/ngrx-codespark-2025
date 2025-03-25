import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { ProductsEffects, productsFeature } from './store/products';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CartEffects, cartFeature } from './store/cart';
import { GeolocationEffects, geolocationFeature } from './store/geolocation';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideStore(),
    provideState(productsFeature),
    provideState(geolocationFeature),
    provideState(cartFeature),
    provideEffects(ProductsEffects, CartEffects, GeolocationEffects),
    provideHttpClient(),
    provideAnimationsAsync(),
  ],
};
