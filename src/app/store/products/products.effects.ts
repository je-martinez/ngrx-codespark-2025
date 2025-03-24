import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { ProductsActions } from './products.actions';
import { StoreService } from '../../services';

@Injectable()
export class ProductsEffects {
  private actions$ = inject(Actions);
  private storeService = inject(StoreService);

  fetchProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductsActions.fetchProducts),
      concatMap(() =>
        this.storeService.getProducts().pipe(
          map((data) => ProductsActions.fetchProductsSuccess({ data })),
          catchError((error) =>
            of(ProductsActions.fetchProductsFailure({ error }))
          )
        )
      )
    );
  });
}
