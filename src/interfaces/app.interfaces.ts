export interface ICustomer {
    id: number;
    name: string;
}

export interface IPurchase {
    id: number;
    stamp: Date;
    quantity: number;
    customerId: number;
    productId: number;
}

export interface IProduct {
    id: number;
    name: string;
    price: number;
}
