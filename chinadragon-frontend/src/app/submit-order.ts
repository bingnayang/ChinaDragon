import { CartOrder } from './cart-order';

export class SubmitOrder {
    id: number;
    name: string;
    email: string;
    phone: string;
    pickup: string;
    subtotal: any;
    tax: any;
    total: any;
    orderItem: CartOrder[];
}

