export interface ICustomer {
    id: number;
    name: string;
}

export interface IPurchase {
    stamp: Date;
    quantity: number;
    customerId: number;
    productId: number;
}

export interface IProduct {
    name: string;
    price: number;
}
