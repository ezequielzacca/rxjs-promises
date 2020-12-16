import { IPurchase } from "src/interfaces/app.interfaces";
import * as dayjs from "dayjs";

export const MOCK_PURCHASES: IPurchase[] = [
    {
        id: 1,
        quantity: 3,
        productId: 1,
        customerId: 1,
        stamp: dayjs().subtract(10, "day").toDate()
    },
    {
        id: 2,
        quantity: 5,
        productId: 2,
        customerId: 3,
        stamp: dayjs().subtract(7, "day").toDate()
    },
    {
        id: 3,
        quantity: 4,
        productId: 4,
        customerId: 5,
        stamp: dayjs().subtract(3, "day").toDate()
    },
    {
        id: 4,
        quantity: 12,
        productId: 3,
        customerId: 2,
        stamp: dayjs().subtract(1, "day").toDate()
    },
    {
        id: 5,
        quantity: 1,
        productId: 5,
        customerId: 1,
        stamp: dayjs().subtract(1, "day").toDate()
    }
]