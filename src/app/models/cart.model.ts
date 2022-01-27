import { CartStatusType } from '../enums/cart_status_type';

export default interface Cart {
    id: number;
    status: CartStatusType;
}