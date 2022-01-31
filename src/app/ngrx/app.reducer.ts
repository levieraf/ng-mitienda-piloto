import { ActionReducerMap } from "@ngrx/store";
import * as cartReducer from "./reducers/carts.reducers";
import * as productReducer from "./reducers/products.reducers";
import * as auth from "./reducers/user.reducers";

export interface AppState {
    carts: cartReducer.State,
    user: auth.State,
    products: productReducer.State
}

export const AppReducers: ActionReducerMap<AppState> = {
    carts: cartReducer.cartsReducer,
    user: auth.userReducer,
    products: productReducer.cartsReducer
}