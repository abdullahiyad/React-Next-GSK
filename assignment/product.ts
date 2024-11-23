// task 4
interface Product {
    name: string;
    price: number;
}
const calcTotal=  (products: Product[]): number =>{
    return products.reduce((total: number, product:Product) => total + product.price, 0);
}

//for testing
const products: Product[] = [
    { name: "apple", price: 750 },
    { name: "Banana", price: 500 },
    { name: "Orange", price: 150 }
];
console.log("total Price = " + calcTotal(products)); // Output: 1650

// task 5
const isValid=(email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
// for testing
console.log(isValid("user@example.com"));
console.log(isValid("user@domain.co.uk"));
console.log(isValid("invalid-email.com"));
console.log(isValid("user@.com"));
console.log(isValid("user@domaincom"));

