import { createAction, props } from "@ngrx/store";
import { Cart } from "src/app/models/cart.model";

export const setCarts = createAction(
    '[Cart] Set Carts',
    props<{ carts: Cart[] }>()
)

export const addCart = createAction(
    '[Cart] Add Carts',
    props<{ cart: Cart }>()
)

export const destroyCars = createAction(
    '[Cart] Destroy Carts'
)