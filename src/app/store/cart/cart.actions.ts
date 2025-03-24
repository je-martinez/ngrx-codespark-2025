import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from '../../types';

export const CartActions = createActionGroup({
  source: 'Cart',
  events: {
    'Add To Cart': props<{ product: Product }>(),
    'Increase Quantity': props<{ productId: number }>(),
    'Decrease Quantity': props<{ productId: number }>(),
    'Remove From Cart': props<{ productId: number }>(),
    'Clear Cart': emptyProps(),
  },
});
