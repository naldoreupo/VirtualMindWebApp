import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../store/reducers/index'
import { AmountChangeAction } from '../store/actions/purchase.action'
import { AppState } from '../store/state/AppState';
import { Observable } from 'rxjs';
import { Purchase } from '../store/models/purchase';


@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent  {

  purchase : Purchase;
  userId: number;
  amount: number;
  currencyCode: string; 

  constructor(public store: Store<AppState>) { 

    store.select<Purchase>((state: any) => state) 
          .subscribe((completeState: any) => this.purchase = completeState.Purchase);
  }

  SavePurchase(){

    let payload  = new Purchase();

     payload.currencyCode=   this.currencyCode ;
     payload.amount = this.amount,
     payload.userId = this.userId,
  
     this.store.dispatch( new AmountChangeAction(payload));

    };
}
