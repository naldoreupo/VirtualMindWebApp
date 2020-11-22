import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import { of } from 'rxjs/observable/of';
import * as fromActions from '../actions/quote.action'
import { PurchaseService } from 'src/app/service/purchase.service'
import { concatMap } from 'rxjs-compat/operator/concatMap';
import { map, switchMap,mergeMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { ofType } from '@ngrx/effects';
import { QuoteService } from 'src/app/service/quote.service';

@Injectable()
export class QuoteEffects {
  constructor(
    private actions$: Actions,
    private quoteService: QuoteService
  ) {} 


  @Effect()
  GetQuoteByCode$: Observable<Action> = this.actions$.pipe(
    ofType<fromActions.GetQuoteAction>(fromActions.GET_QUOTE),
    map(action => action.payload),    
    switchMap(data => 
      this.quoteService.get(data)
      .map(res => new fromActions.GetQuoteSuccessAction(res.data)) 
  ))


  
  @Effect()
  GetQuotes$: Observable<Action> = this.actions$.pipe(
    ofType<fromActions.GetQuotesAction>(fromActions.GET_QUOTES),
    mergeMap(data => 
      this.quoteService.getAll()
      .pipe(map(res => new fromActions.GetQuotesSuccessAction(res.list)) 
      ))
  )

}