import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TransactionAction } from '../actions/transaction.action';
import { TransactionModel } from '../interface/transaction.interface';

const initialState: TransactionModel = {
    counter:0,
    transactionId:0
}

let reducers:any = {};
reducers[TransactionAction.increaseCounter] = (state:TransactionModel) => {
  state.counter++;
}

reducers[TransactionAction.decreseCounter] = (state:TransactionModel) => {
  state.counter--;
}

reducers[TransactionAction.setCounter] = (state: TransactionModel, action:PayloadAction<number>) => {
  state.counter = action.payload;
}

reducers[TransactionAction.setTransactionId] = (state: TransactionModel, action:PayloadAction<number>) => {
  state.transactionId = action.payload;
}

reducers[TransactionAction.setTransaction] = (state: TransactionModel, action:PayloadAction<TransactionModel>) => {
  state =Object.assign(state,action.payload)
}

const transaction = createSlice({
  name: 'counters',
  initialState: initialState,
  reducers: reducers
})

export const getAction = (action:string, payload?:any) => {
  let sliceAction:any = transaction.actions[action]
  return sliceAction(payload);
}

export const transactionReducer =  transaction.reducer