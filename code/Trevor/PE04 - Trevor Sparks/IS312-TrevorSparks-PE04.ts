//let pizzaSlices:string[] = ["Cheese", "Peperoni", "Sausage", "BBQ", "Mac & Cheese", "Chicken Alfredo"];

let pizzaSlices =[
    {
        name: "Cheese",
        type: "Vegetarian",
        price: 40

    },{
        name: "Peperoni",
        type: "Meat",
        price: 35

    },{
        name: "Sausage",
        type: "Meat",
        price: 35

    },{
        name: "BBQ Chicken",
        type: "Meat",
        price: 35

    },{
        name: "Mac & Cheese",
        type: "Vegetarian",
        price: 40

    },{
        name: "Chicken Alfredo",
        type: "Meat",
        price: 35

    }
]


const transactions = [
    {slices: ["Mac & Cheese", "Mac & Cheese", "Pepperoni", "Pepperoni", "BBQ Chicken"], cost: 220},
    {slices: ["Cheese", "Pepperoni", "Pepperoni", "Chicken Alfredo", "Pepperoni", "Cheese"], cost: 200},
    {slices: ["Chicken Alfredo", "Mac & Cheese", "BBQ Chicken", "Chicken Alfredo"], cost: 145},
    {slices: ["Sausage", "BBQ Chicken", "BBQ Chicken", "BBQ Chicken", "Sausage", "Sausage", "Chicken Alfredo"], cost: 245},
    {slices: ["Chicken Alfredo", "Mac & Cheese", "BBQ Chicken"], cost: 110}
]

var totalSales:number = 0

totalSales = transactions.reduce((totalSum, currentSum) => totalSum + currentSum.cost, 0)

console.log(`You’ve made $${totalSales} today!`)


for(let i = 0; i< transactions.length; i++){
    const currentTransactionSlice = transactions[i].slices;
    console.log(currentTransactionSlice);

    let pizzaSum = currentTransactionSlice.reduce(...);
}
