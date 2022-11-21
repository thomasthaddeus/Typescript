// Task 1-1
var slices:string[];
var pizzaTypes: string[];
var price: number[];
// Task 1-2
slices = new Array("Cheese", "Meatlovers", "Supreme", "BBQ", "Pepperoni", "Pineapple & Ham")
pizzaTypes = ["omni", "meat", "veggie"]
price = [5, 10, 20]
// This is supposed to be the type or something IDK what the instructions want or how to interpret them.
type pizza = {
    Name: string;
    Type: string;
    Price: number
};
function getPizza(array) {
    for(var i = 0;i<array.length;i++) {
        console.log(array[i])
    }
}
// Task 2-1
let transactions = [15, 20, 30, 10, 5];
var total = getPizza(transactions)
// Function that isnt set up right for logging prices
function writePrice(slices: string, price: number): void {
    console.log(`Price for ${slices}: $${price.toFixed(2)}`);
}
// Task 3-1
var total2 = transactions.reduce(function(a, b){ return b; });
console.log(`Total is: $${ total2 }`);