interface Pizza{
    type: string,
    slices: number,
    crust?: string
}

interface Toppings extends Pizza{
    sauce: "Tomato" | "Alfredo" | "BBQ Sauce",
    pineapple: boolean,
    parmesan: boolean,
    crust?: string
}

var myPizza: Toppings = ({
    type: "Meat lovers",
    slices: 6,
    sauce: "Tomato",
    pineapple: false,
    parmesan: true,
    crust: "Stuffed"
});

console.log("Number of slices in myPizza: ", myPizza.slices);

function checkSlices(pizza: Toppings): string{
    if(pizza.slices > 8){
        return "The number of slices is too high";
    }else if(pizza.slices == 8){
        return `The whole pizza is remaining`;
    }else{
        return `There is ${pizza.slices}/8 remaining of the pizza`;
    }
};

console.log(checkSlices(myPizza));
