//let pizzaSlices:string[] = ["Cheese", "Peperoni", "Sausage", "BBQ", "Mac & Cheese", "Chicken Alfredo"];
var pizzaSlices = [
    {
        name: "Cheese",
        type: "Vegetarian",
        price: 40
    }, {
        name: "Peperoni",
        type: "Meat",
        price: 35
    }, {
        name: "Sausage",
        type: "Meat",
        price: 35
    }, {
        name: "BBQ Chicken",
        type: "Meat",
        price: 35
    }, {
        name: "Mac & Cheese",
        type: "Vegetarian",
        price: 40
    }, {
        name: "Chicken Alfredo",
        type: "Meat",
        price: 35
    }
];
var transactions = [
    { slices: ["Mac & Cheese", "Mac & Cheese", "Pepperoni", "Pepperoni", "BBQ Chicken"], cost: 220 },
    { slices: ["Cheese", "Pepperoni", "Pepperoni", "Chicken Alfredo", "Pepperoni", "Cheese"], cost: 200 },
    { slices: ["Chicken Alfredo", "Mac & Cheese", "BBQ Chicken", "Chicken Alfredo"], cost: 145 },
    { slices: ["Sausage", "BBQ Chicken", "BBQ Chicken", "BBQ Chicken", "Sausage", "Sausage", "Chicken Alfredo"], cost: 245 },
    { slices: ["Chicken Alfredo", "Mac & Cheese", "BBQ Chicken"], cost: 110 }
];
var totalSales = 0;
totalSales = transactions.reduce(function (totalSum, currentSum) { return totalSum + currentSum.cost; }, 0);
console.log("You\u2019ve made $".concat(totalSales, " today!"));
for (var i = 0; i < transactions.length; i++) {
    var currentTransactionSlice = transactions[i].slices;
    for (var j = 0; j < currentTransactionSlice.length; j++) {
        console.log(currentTransactionSlice[j]);
    }
}
