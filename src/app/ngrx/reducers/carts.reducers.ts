import { createReducer, on } from "@ngrx/store";
import { Cart } from "src/app/models/cart.model";
import { addCart, destroyCars, setCarts } from "../actions/carts.actions";

export interface State {
    carts: Cart[];
}

const initialCartsState: State = {
    carts: [],
};

const _cartsReducer = createReducer(initialCartsState,
    on(setCarts, (state, { carts }) => ({ ...state, carts: [...carts] })),
    on(addCart, (state, {cart}) => {
        console.info(cart);
        return {
            carts: [...state.carts, cart]
        };
    }),
    on(destroyCars, (state) => ({ ...state, carts: [] })),
);

export function cartsReducer(state, action) {
    return _cartsReducer(state, action);
}