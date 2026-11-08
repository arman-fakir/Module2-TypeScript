// task 1
type UserRole = "admin" | "customer" | "guest"
type OrderStatus = "pending" | "processing" | "shipped" | "delivered"

interface User {
    id: string | number;
    name: string;
    role: UserRole;
    email?: string
}
interface Product {
    id: string;
    title: string;
    price: number
}

interface Order {
    orderId: string;
    user: User;
    items: Product[];
    status: OrderStatus;
    totalAmount : number
}

const APP_CONFIG = {
    currency : "BDT",
    taxRate: 0.05,
    version:"v1.0.0"
} as const

const errorThrow = (msg:string): never => {
    throw new Error(msg)
}

// const processPayment = (amount: unknown, isVerified: boolean) : number =>{
//     if(!isVerified)
// }