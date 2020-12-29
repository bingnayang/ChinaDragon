import { CartOrder } from './cart-order';

export class SubmitOrder {
    name: string;
    email: string;
    phone: string;
    pickup: string;
    subtotal: any;
    tax: any;
    total: any;
    orderItem: CartOrder[];
}

