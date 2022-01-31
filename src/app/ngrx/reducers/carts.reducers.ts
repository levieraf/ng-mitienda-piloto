import { Action, createReducer, on } from "@ngrx/store";
import { Cart } from "src/app/models/cart.model";
import { createCart } from "../actions/carts.actions";


const initialCartsState: Cart[] = [
    new Cart(1),
    new Cart(2),
    new Cart(3),
];

const _cartsReducer = createReducer(initialCartsState,
    on(createCart, (state, { id }) => [...state, new Cart(id)])
);

export function cartsReducer(state: Cart[] | undefined, action: Action) {
    return _cartsReducer(state, action);
}