import * as fromPurchase from './purchase.reducer'
import * as fromQuote from './quote.reducer'


export const reducers = {
  purchase : fromPurchase.reducer,
  quote : fromQuote.reducer
}