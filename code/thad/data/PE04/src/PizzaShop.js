var Slice = /** @class */ (function () {
    function Slice() {
        this.name = ["Cheese", "Pepperoni", "MeatLovers", "Veggie", "BBQ"];
        this.type = ["Omni", "Meat", "Meat", "Veggie", "Meat"];
        this.price = [2, 3, 4, 1, 5];
    }
    return Slice;
}());
console.log(Slice);
var names = [];
var transaction = [];
function writePrice(Slice, price) {
    console.log("Price for ".concat(Slice, ": $").concat(price.toFixed(2)));
}
