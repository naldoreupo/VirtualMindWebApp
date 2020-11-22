
import { State } from '@ngrx/store'
import * as purchaseActions from '../actions/purchase.action'
import { Purchase } from '../models/purchase'

const InitState : Purchase = {
      purchasedAmount : 0,
      userId : 0,
      amount: 0,
      currencyCode :''
}

 export function reducer(state : Purchase = InitState , action : purchaseActions.Actions )  {
  switch (action.type) {
      case purchaseActions.AMOUNT_CHANGE_SUCCESS:
        console.log('AMOUNT_CHANGE_SUCCESS',action.payload)
        return {
          ...state, 
          purchase : action.payload
        }
    default:
      return state
  }
} 