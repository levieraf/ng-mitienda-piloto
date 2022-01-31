import { createReducer, on } from "@ngrx/store";
import { Cart } from "src/app/models/cart.model";
import { destroyCars, setCarts } from "../actions/carts.actions";

export interface State {
    carts: Cart[];
}

const initialCartsState: State = {
    carts: [],
};

const _cartsReducer = createReducer(initialCartsState,
    on(setCarts, (state, { carts }) => ({ ...state, carts: [...carts] })),
    on(destroyCars, (state) => ({ ...state, carts: [] })),
);

export function cartsReducer(state, action) {
    return _cartsReducer(state, action);
}