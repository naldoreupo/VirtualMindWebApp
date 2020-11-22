import { Action } from '@ngrx/store'
import { Purchase } from '../models/purchase';

export const AMOUNT_CHANGE = '[AMOUNT CHANGE] Exchange Purchase'
export const AMOUNT_CHANGE_SUCCESS = '[AMOUNT CHANGE SUCCESS] Exchange Purchase'

export class AmountChangeAction implements Action {
  readonly type = AMOUNT_CHANGE
  constructor(public payload : Purchase) {}
}

export class AmountChangeSuccessAction implements Action {
  readonly type = AMOUNT_CHANGE_SUCCESS;
  constructor(public payload : Purchase) {}
}

export type Actions = AmountChangeAction | AmountChangeSuccessAction ;