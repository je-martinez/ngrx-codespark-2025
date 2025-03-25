import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromGeolocation from './geolocation.reducer';

export const selectGeolocationState = createFeatureSelector<fromGeolocation.State>(
    fromGeolocation.geolocationFeatureKey
);

export const selectGeolocationCity = createSelector(
    selectGeolocationState,
    (state) => state.city
);