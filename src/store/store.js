import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import toolkitSlice from "./toolkitSlice";
import logger from "redux-logger";

const reducer = combineReducers({
  main: toolkitSlice,
});

export const store = configureStore({
  reducer: reducer,
  middleware: [...getDefaultMiddleware(), logger],
});
