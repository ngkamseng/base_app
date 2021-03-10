import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoginAction } from '../actions/login.action';
import { LoginModel } from '../interface/login.interface';

const initialState: LoginModel = {

    userId:"testUser",
    token:"basbasdbas"
  
}

let reducers:any = {};
reducers[LoginAction.setUserId] = (state:LoginModel, action:PayloadAction<string>) => {
  state.userId = action.payload;
}

reducers[LoginAction.setToken] = (state:LoginModel, action:PayloadAction<string>) => {
  state.token = action.payload;
}

const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: reducers
})

export const getLoginAction = (action:string, payload?:any) => {
  let sliceAction:any = loginSlice.actions[action]
  return sliceAction(payload);
}

export const loginReducer =  loginSlice.reducer