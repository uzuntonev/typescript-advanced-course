namespace FoodAndBeverages {
    export interface Delivery {
        newCustomer(customerName: string, visited: boolean): void;
        visitCustomer(customerName: any): string;
        showCustomers(): string
    }
}