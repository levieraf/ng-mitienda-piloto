import { CartStatusType } from '../enums/cart_status_type';

export class Cart {
    public id: number;
    public status: CartStatusType;

    constructor() {
        this.id = Math.floor((Math.random() * 100 + 1 - 1) + 1);
        this.status = CartStatusType.Pending;
    }
}