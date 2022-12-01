class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply (x, y) {
    if (Math.random() < 0.2) {
        return x * y ;
    } else {
        throw new MultiplicatorUnitFailure("Break");
    }
}

function reliableMultiply(x, y) {
    "use strict";
    try {
        return primitiveMultiply(x, y);
    } catch (err) {
        if (err instanceof MultiplicatorUnitFailure) {
            return reliableMultiply(x, y);
        } else {
            throw err;
        }
    }
}

var i = Math.random().toFixed(2);
var j = Math.random().toFixed(2);
console.log(reliableMultiply(i, j));