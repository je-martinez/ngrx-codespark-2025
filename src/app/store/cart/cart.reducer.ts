import { createFeature, createReducer, on } from '@ngrx/store';
import { CartActions } from './cart.actions';
import { CartItem } from '../../types';

export const cartFeatureKey = 'cart';

export interface State {
  items: CartItem[];
}

export const initialState: State = {
  items: [],
};

export const reducer = createReducer(
  initialState,
  on(CartActions.addToCart, (state, action) => {
    const item = state.items.find(
      (item) => item.product.id === action.product.id
    );
    if (item) {
      return {
        ...state,
        items: state.items.map((item) =>
          item.product.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }
    return {
      ...state,
      items: [...state.items, { product: action.product, quantity: 1 }],
    };
  }),
  on(CartActions.removeFromCart, (state, action) => {
    const item = state.items.find(
      (item) => item.product.id === action.productId
    );
    if (!item) {
      return state;
    }
    return {
      ...state,
      items: state.items.filter((i) => i.product.id !== action.productId),
    };
  }),
  on(CartActions.clearCart, (state) => ({
    ...state,
    items: [],
  })),
  on(CartActions.increaseQuantity, (state, action) => {
    const item = state.items.find((i) => i.product.id === action.productId);
    if (!item) {
      return state;
    }
    return {
      ...state,
      items: state.items.map((i) =>
        i.product.id === action.productId
          ? { ...i, quantity: i.quantity + 1 }
          : i
      ),
    };
  }),
  on(CartActions.decreaseQuantity, (state, action) => {
    const item = state.items.find((i) => i.product.id === action.productId);
    if (!item) {
      return state;
    }
    return {
      ...state,
      items: state.items.map((i) =>
        i.product.id === action.productId
          ? { ...i, quantity: i.quantity - 1 }
          : i
      ),
    };
  })
);

export const cartFeature = createFeature({
  name: cartFeatureKey,
  reducer,
});
