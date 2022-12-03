function greaterThan(n: number)
{
    return m => m > n;
}
console.log(greaterThan(11)(10));