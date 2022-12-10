
const loginSectionEL = document.getElementById("login") as HTMLDivElement;
const loginFormEL = document.getElementById("loginForm") as HTMLFormElement;
const loginFormName = document.getElementById("name") as HTMLInputElement;
const nameGoesHereEL = document.getElementById("nameGoesHere") as HTMLHeadElement;
const foodPriceEL = document.getElementById("foodPriceSpan") as HTMLSpanElement;
const carPriceEL = document.getElementById("carPriceSpan") as HTMLSpanElement;
const productsEL = document.getElementById("products") as HTMLDivElement;
const bodyEL = document.body;
const totalEl = document.getElementById("total") as HTMLHeadingElement;
const shopEL = document.getElementById("shop") as HTMLDivElement;
const navigateProductButton = document.getElementById("navigateProduct") as HTMLButtonElement;
const navigateShopButton = document.getElementById("navigateShop") as HTMLButtonElement;
const updateTaxButton = document.getElementById("updateTaxRate") as HTMLButtonElement;
const taxRateEL = document.getElementById("taxRate") as HTMLInputElement;
const foodQuantityInputEL = document.getElementById("foodStock") as HTMLInputElement;
const foodPriceInputEL = document.getElementById("foodPrice") as HTMLInputElement;
const carQuantityInputEL = document.getElementById("carStock") as HTMLInputElement;
const carPriceInputEL = document.getElementById("carPrice") as HTMLInputElement;

const div1 = document.getElementById("div1") as HTMLDivElement;

let userName:string = "";
let taxRate = 0.01;

let cart: any = {
    "food":{
        price: 5,
        quantity: 0,
        stock: 10
    },
    "car":{
        price: 5000,
        quantity: 0,
        stock: 15
    }
};

function navigateProduct(){
    loginSectionEL.style.display = "none";
    shopEL.style.display = "none";
    nameGoesHereEL.textContent = "Users Name: " + userName;
    foodPriceEL.textContent = cart.food.price;   
    carPriceEL.textContent = cart.car.price;
    totalEl.style.display = "block";
    calculate();
    productsEL.style.display = "block";
}

function navigateShop(){
    shopEL.style.display = "block";
    productsEL.style.display = "none";
    taxRateEL.value = taxRate.toString();

    foodPriceInputEL.value = cart.food.price.toString();
    carPriceInputEL.value = cart.car.price.toString();
    foodQuantityInputEL.value = cart.food.stock.toString();
    carQuantityInputEL.value = cart.car.stock.toString();   
}

function calculate(){
    let total = 0;
    for(let product in cart){
        total += cart[product].price * cart[product].quantity
    }
    total = (1+taxRate)*total;
    totalEl.textContent = "Total: " + total.toFixed(2)
}

function addToCart(e: PointerEvent): any{
    console.log(e.target);
    const clickedElement = e.target as HTMLElement;
    if(clickedElement.id === "navigateShop"){
        navigateShop();
        return;
    }
    if(clickedElement.id === "navigateProducts"){
        navigateProduct();
        return;
    }
    if(clickedElement.id === "updateTaxRate"){
        taxRate = +taxRateEL.value;
        if(carPriceInputEL.valueAsNumber < 5000){
            alert("The price of the car is too low");
            return;
        }
        cart.food.price = +foodPriceInputEL.value;
        cart.food.stock = +foodQuantityInputEL.value;
        cart.car.price = +carPriceInputEL.value;
        cart.car.stock = +carQuantityInputEL.value;
        return;
    }


    if(clickedElement.classList.contains("addToCart")){
        const dataType = clickedElement.getAttribute("data-type") as string;
        if(cart[dataType].stock == 0){
            alert("Sorry, we do not have that much");
            return;
        }else{
            cart[dataType].stock -=1;
            cart[dataType].quantity+=1;
            console.log(dataType+"Quantity");
            (document.getElementById(dataType+"Quantity") as any).textContent = cart[dataType].quantity; 
            calculate();
            console.log(cart);
            console.log(cart[dataType].stock,cart[dataType].quantity);
        }
    }

    if(clickedElement.classList.contains("removeFromCart")){
        const dataType = clickedElement.getAttribute("data-type") as string;
        if(cart[dataType].quantity <= 0){
            alert("It is impossible to remove nothing from a cart");
            return;
        }else{
            cart[dataType].stock +=1;
            cart[dataType].quantity-=1;
            (document.getElementById(dataType+"Quantity") as any).textContent = cart[dataType].quantity;
            calculate();
            console.log(cart[dataType].stock,cart[dataType].quantity);
        }
    }
}


function hideLoginFormSection(e: Event){
    e.preventDefault();
    userName = loginFormName.value;
    navigateProduct();
}

loginFormEL.addEventListener("submit", hideLoginFormSection);

bodyEL.addEventListener("click", addToCart as any);

navigateProductButton.addEventListener("click", navigateProduct);
navigateShopButton.addEventListener("click", navigateShop)