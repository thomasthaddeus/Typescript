var arr1 = [1, 2, 3, 4, 5];
var arr2 = [6, 7, 8, 9, 10];
var sum = arr1.map(function (n, idx) {
    for (var i = 0; i < Math.max(arr1[i]); i++)
        return n + arr2[idx];
});
console.log(sum);
