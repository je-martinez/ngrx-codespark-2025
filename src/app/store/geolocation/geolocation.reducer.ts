import { createFeature, createReducer, on } from '@ngrx/store';
import { GeolocationActions } from './geolocation.actions';

export const geolocationFeatureKey = 'geolocation';

export interface State {
    coords: GeolocationPosition | null;
    city: string;
}

export const initialState: State = {
    coords: null,
    city: ""
};

export const reducer = createReducer(
    initialState,
    on(GeolocationActions.updateGeolocation, (state, action) => {
        return {
            ...state,
            coords: action.position
        };
    }),
    on(GeolocationActions.updateGeolocationCity, (state, action) => {
        return {
            ...state,
            city: action.city
        }
    })
);

export const geolocationFeature = createFeature({
    name: geolocationFeatureKey,
    reducer,
});
