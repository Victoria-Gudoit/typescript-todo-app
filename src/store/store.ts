import { configureStore } from "@reduxjs/toolkit";
import { reducer as todoReducer } from "./slice";
import {reducer as filterReducer} from "./filterSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
   todos: todoReducer,
   filter: filterReducer,
})

export type Store = ReturnType<typeof rootReducer>

export const store = configureStore({
   reducer: rootReducer,
})
