import { combineReducers, configureStore } from '@reduxjs/toolkit'
import reducers from './reducers' 

let totalReducers = {...reducers};

const store = configureStore({
  reducer: combineReducers(totalReducers)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store