import { Action } from '@ngrx/store'
import { Quote } from '../models/Quote';

export const GET_QUOTE = '[GET] Exchange Purchase'
export const GET_QUOTE_SUCCESS = '[GET SUCCESS] Exchange Purchase'
export const GET_QUOTES = '[GET] Exchanges Purchase'
export const GET_QUOTES_SUCCESS = '[GET SUCCESS] Exchanges Purchase'

export class GetQuoteAction implements Action {
  readonly type = GET_QUOTE
  constructor(public payload : string) {}
}

export class GetQuoteSuccessAction implements Action {
  readonly type = GET_QUOTE_SUCCESS;
  constructor(public payload : Quote) {}
}

export class GetQuotesAction implements Action {
  readonly type = GET_QUOTES
  constructor() {}
}

export class GetQuotesSuccessAction implements Action {
  readonly type = GET_QUOTES_SUCCESS;
  constructor(public payload : Quote[]) {}
}

export type ALL_QUOTE_REDUCER_ACTIONS = GetQuoteAction | GetQuoteSuccessAction | GetQuotesAction | GetQuotesSuccessAction ;