class Slice {
name: string[]= ["Cheese", "Pepperoni", "MeatLovers", "Veggie", "BBQ"];
type: string[]= ["Omni", "Meat", "Meat", "Veggie", "Meat"];
price: number[] = [2, 3, 4, 1, 5];
}
console.log(Slice);


let names: string[] = []
let transaction: number[] = [];

function writePrice(Slice: string, price: number): void {
    console.log(`Price for ${Slice}: $${price.toFixed(2)}`);
}
