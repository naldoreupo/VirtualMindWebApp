import * as quoteActions from '../actions/quote.action'
import { Quote } from '../models/Quote'

const InitialState  = new Quote() ;



export function reducer(state  = InitialState , action : quoteActions.ALL_QUOTE_REDUCER_ACTIONS ) {
  switch (action.type) {
      case quoteActions.GET_QUOTE_SUCCESS:
        console.log('GET_QUOTE_SUCCESS',action.payload)
        return {
            ...state, 
            QuoteExchage : action.payload
        }
        case quoteActions.GET_QUOTES_SUCCESS:
          console.log('GET_QUOTES_SUCCESS',action.payload)
          return {
            ...state, 
            QuotesExchage : action.payload
          }
    default:
      return state
  }
} 