import { createAction, props } from "@ngrx/store";

export const createCart = createAction(
    '[Cart] create cart',
    props<{ id: number }>()
)