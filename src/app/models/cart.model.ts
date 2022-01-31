import { CartStatusType } from '../enums/cart_status_type';

export class Cart {
    public id: number;
    public status: CartStatusType;

    constructor(id: number) {
        this.id = id;
        this.status = CartStatusType.Pending;
    }
}