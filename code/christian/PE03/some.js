function greaterThan(n) {
    return function (m) { return m > n; };
}
console.log(greaterThan(11)(10));
