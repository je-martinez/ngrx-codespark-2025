import { createActionGroup, props, emptyProps } from "@ngrx/store";
import { Product } from "../../types";

export const GeolocationActions = createActionGroup({
    source: 'Geolocation',
    events: {
        'Fetch Geolocation': emptyProps(),
        'Fetch Geolocation Complete': emptyProps(),
        'Fetch City': props<{ position: GeolocationPosition }>(),
        'Update Geolocation': props<{ position: GeolocationPosition }>(),
        'Update Geolocation City': props<{ city: string }>(),
        'Fetch City Failure': props<{ error: string }>(),
    },
});
