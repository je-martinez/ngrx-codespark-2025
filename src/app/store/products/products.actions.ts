import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from '../../types';

export const ProductsActions = createActionGroup({
  source: 'Products',
  events: {
    'Fetch Products': emptyProps(),
    'Fetch Products Success': props<{ data: Product[] }>(),
    'Fetch Products Failure': props<{ error: string }>(),
  },
});
