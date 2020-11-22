import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import { of } from 'rxjs/observable/of';
import * as fromActions from '../actions/purchase.action'
import { PurchaseService } from 'src/app/service/purchase.service'
import { concatMap } from 'rxjs-compat/operator/concatMap';
import { map, switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { ofType } from '@ngrx/effects';

@Injectable()
export class PurchaseEffects {
  constructor(
    private actions$: Actions,
    private purchaseService: PurchaseService
  ) {} 


  @Effect()
  searchArticleById$: Observable<Action> = this.actions$.pipe(
    ofType<fromActions.AmountChangeAction>(fromActions.AMOUNT_CHANGE),
    map(action => action.payload),    
    switchMap(data => 
      this.purchaseService.save(data)
      .map(res => new fromActions.AmountChangeSuccessAction(res.data)) 
  ))
}