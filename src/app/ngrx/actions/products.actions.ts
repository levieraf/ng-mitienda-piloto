import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/models/product.model";

export const setProducts = createAction(
    '[Products] Set Product',
    props<{ products: Product[] }>()
)

export const destroyProducts = createAction(
    '[Products] Destroy Products'
)