var myPizza = {
    type: "Capsicum",
    slices: 7,
    sauce: 'alfrado'
};
function findHCF(small, large) {
    var rem = large % small;
    if (rem == 0) {
        return small;
    }
    return findHCF(rem, small);
}
function checkSlices(pizza) {
    if (pizza.slices > 8) {
        return "It's too many slices";
    }
    var hcf = findHCF(pizza.slices, 8);
    var portion = pizza.slices == 8 ? "1" : "".concat(pizza.slices / hcf, "/").concat(8 / hcf);
    return "There is ".concat(portion, " remaining of the pizza");
}
console.log(checkSlices(myPizza));
