import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { GeolocationActions } from './geolocation.actions';
import { selectGeolocationCity } from './geolocation.selectors';

@Injectable({
    providedIn: 'root',
})
export class GeolocationFacade {
    private store = inject(Store);

    fetchGeolocation() {
        this.store.dispatch(GeolocationActions.fetchGeolocation());
    }

    selectCity() {
        return this.store.select(selectGeolocationCity);
    }
}
