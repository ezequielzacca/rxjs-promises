export interface ICustomer {
    id: number;
    name: string;
    purchases?: IPurchase[];
}

export interface IPurchase {
    stamp: Date;
    quantity: number;
    customerId: number;
    productId: number;
    customer?: ICustomer;
    product?: IProduct;
}

export interface IProduct {
    name: string;
    price: number;
}
