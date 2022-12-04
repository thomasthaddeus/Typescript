interface Pizza 
{
    type: string;
    slices: number;
    crust: string;
}
const myPizza: Toppings = 
{
    type: "Capsicum",
    slices: 7,
    sauce: 'alfrado'
}
function compareValue(small: number, large: number): number 
{
    const rem = large % small;
  
    if (rem == 0)
    {
      return small;
    }
    return compareValue(rem, small);
  }
  function checkSlices(pizza: Pizza) 
  {
    if (pizza.slices > 8) 
    {
      return "Number is too high";
    }
    const Value = compareValue(pizza.slices, 8);
    const portion = pizza.slices == 8 ? "1" : `${pizza.slices / Value}/${8 / Value}`;
    return `There is ${portion} remaining of the pizza`;
  }
console.log(checkSlices(myPizza));
interface Toppings extends Pizza 
{
sauce: 'tomato' | 'alfrado' | 'bbq sauce';
pineapple?: boolean; 
parmesan?: boolean;
crust?: string;
}