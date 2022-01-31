import { ActionReducerMap } from "@ngrx/store";
import { Cart } from "../models/cart.model";
import { cartsReducer } from "./reducers/carts.reducers";

export interface AppState {
    carts: Cart[]
}

export const AppReducers: ActionReducerMap<AppState> = {
    carts: cartsReducer
}