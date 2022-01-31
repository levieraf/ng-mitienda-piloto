import { createAction, props } from "@ngrx/store";
import { Cart } from "src/app/models/cart.model";

export const setCarts = createAction(
    '[Cart] Set Carts',
    props<{ carts: Cart[] }>()
)

export const destroyCars = createAction(
    '[Cart] Destroy Carts'
)