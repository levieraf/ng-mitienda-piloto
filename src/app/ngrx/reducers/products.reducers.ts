import { createReducer, on } from "@ngrx/store";
import { Product } from "src/app/models/product.model";
import { destroyProducts, setProducts } from "../actions/products.actions";

export interface State {
    products: Product[];
}

const initialCartsState: State = {
    products: [
        new Product(1, 'Producto 1', '001', 'Producto descripcion'),
        new Product(2, 'Producto 2', '002', 'Producto descripcion'),
        new Product(3, 'Producto 3', '003', 'Producto descripcion'),
        new Product(4, 'Producto 4', '004', 'Producto descripcion'),
        new Product(5, 'Producto 5', '005', 'Producto descripcion'),
        new Product(6, 'Producto 6', '006', 'Producto descripcion'),
        new Product(7, 'Producto 7', '007', 'Producto descripcion'),
        new Product(8, 'Producto 8', '008', 'Producto descripcion'),
        new Product(9, 'Producto 9', '009', 'Producto descripcion'),
        new Product(10, 'Producto 10', '010', 'Producto descripcion'),
    ],
};

const _cartsReducer = createReducer(initialCartsState,
    on(setProducts, (state, { products }) => ({ ...state, products: [...products] })),
    on(destroyProducts, (state) => ({ ...state, products: [] })),
);

export function cartsReducer(state, action) {
    return _cartsReducer(state, action);
}