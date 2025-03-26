import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GeolocationActions } from './geolocation.actions';
import { GeolocationService } from '../../services/geolocation.service';
import { Store } from '@ngrx/store';

@Injectable()
export class GeolocationEffects {
    private actions$ = inject(Actions);
    private store = inject(Store);
    private geolocationService = inject(GeolocationService);

    fetchCoordinates$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(GeolocationActions.fetchGeolocation),
            concatMap(() => {
                navigator.geolocation.getCurrentPosition((position) => {
                    this.store.dispatch(GeolocationActions.updateGeolocation({ position }));
                    this.store.dispatch(GeolocationActions.fetchCity({ position }));
                });
                return of(GeolocationActions.fetchGeolocationComplete())
            })
        );
    });

    fetchCity$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(GeolocationActions.fetchCity),
            concatMap((coords) => {
                return this.geolocationService.getCurrentCity(coords.position).pipe(
                    map((data) => GeolocationActions.updateGeolocationCity({ city: data.results[0].formatted_address })),
                    catchError((error) =>
                        of(GeolocationActions.fetchCityFailure({ error }))
                    )
                )
            })
        )
    })
}
