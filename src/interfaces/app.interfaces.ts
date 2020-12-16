export interface ICustomer {
    id: number;
    name: string;
    purchases?: IPurchase[];
}

export interface IPurchase {
    id: number;
    stamp: Date;
    quantity: number;
    customerId: number;
    productId: number;
    customer?: ICustomer;
    product?: IProduct;
}

export interface IProduct {
    id: number;
    name: string;
    price: number;
}
