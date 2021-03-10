import { config } from "../config";

export const TransactionAction = {
  increaseCounter: config.prefix + "increaseCounter",
  decreseCounter: config.prefix + "decreseCounter",
  setCounter: config.prefix + "setCounter",
  setTransactionId: config.prefix + "setTransactionId",
  setTransaction: config.prefix + "setTransaction",
}