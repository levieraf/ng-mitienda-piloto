import { CartStatusType } from '../enums/cart_status_type';

export interface Cart {
    id: number;
    status: CartStatusType;
}