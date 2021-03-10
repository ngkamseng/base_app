import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface BaseApp_CounterState {
  counter: number
}

interface BaseApp_State {
  BaseApp: BaseApp_CounterState;
}
const initialState: BaseApp_State = {
  BaseApp: {
    counter:0
  }
}


const BaseApp = createSlice({
  name: 'counters',
  initialState: initialState,
  reducers: {
    BaseApp_increment: (state:BaseApp_State) => {
      state.BaseApp.counter++;
    },
    BaseApp_decrement(state: BaseApp_State) {
      state.BaseApp.counter--;
    },
    BaseApp_setValue(state: BaseApp_State, action:PayloadAction<number>) {
      state.BaseApp.counter = action.payload;
    }
  }
})

export const { BaseApp_increment, BaseApp_decrement, BaseApp_setValue } = BaseApp.actions

export default BaseApp.reducer