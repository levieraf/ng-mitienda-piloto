export class ProductCart {
    public id: number;
    public cart_id: number;
    public quantity: number;
    
    constructor(id: number, cart_id: number, quantity: number) {
        this.id = id;
        this.cart_id = cart_id;
        this.quantity = quantity;
    }
}