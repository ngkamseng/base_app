import { loginReducer } from "./LoginReducer";
import {transactionReducer} from "./TransactionReducer"


let allReducers = {
  BaseApp_transaction:transactionReducer,
  BaseApp_login:loginReducer
}
//allReducers["gasabbs"] = transactionReducer;
export default allReducers