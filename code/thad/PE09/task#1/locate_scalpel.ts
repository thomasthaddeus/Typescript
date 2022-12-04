/*
import 'async.js';

import 'async.js';

The village crows own an old scalpel that they occasionally use on special missions—say, to cut through screen doors or packaging. To be able to quickly track it down, every time the scalpel is moved to another nest, an entry is added to the storage of both the nest that had it and the nest that took it, under the name "scalpel", with its new location as the value.

This means that finding the scalpel is a matter of following the breadcrumb trail of storage entries, until you find a nest where that points at the nest itself.

Write an async function locateScalpel that does this, starting at the nest on which it runs. You can use the anyStorage function defined earlier to access storage in arbitrary nests. The scalpel has been going around long enough that you may assume that every nest has a "scalpel" entry in its data storage.

Next, write the same function again without using async and await.

Do request failures properly show up as rejections of the returned promise in both versions? How?
*/
var bigOak = require("./crow-tech").bigOak;

async function locateScalpel(nest) {
  let stEnt = nest.name;          //current location of the scalpel
  for (;;) {                      //recursive loop
    let next = await anyStorage(nest, stEnt, 'scalpel');
    if (next==stEnt) return stEnt;
    else stEnt = nest;
  }
}

function locateScalpel2(nest) {
  function rec(stEnt) {
    return anyStorage(nest, stEnt, 'scalpel').then((next) => {
      if (next == stEnt) return stEnt;
      else return rec(next);
    });
  }
  return rec(nest.name);
}

locateScalpel(bigOak).then(console.log);
locateScalpel2(bigOak).then(console.log);
// → Butcher Shop


/* ---> HINT

This can be done with a single loop that searches through the nests, moving forward to the next when it finds a value that doesn’t match the current nest’s name and returning the name when it finds a matching value. In the async function, a regular for or while loop can be used.

To do the same in a plain function, you will have to build your loop using a recursive function. The easiest way to do this is to have that function return a promise by calling then on the promise that retrieves the storage value. Depending on whether that value matches the name of the current nest, the handler returns that value or a further promise created by calling the loop function again.

Don’t forget to start the loop by calling the recursive function once from the main function.

In the async function, rejected promises are converted to exceptions by await. When an async function throws an exception, its promise is rejected. So that works.

If you implemented the non-async function as outlined earlier, the way then works also automatically causes a failure to end up in the returned promise. If a request fails, the handler passed to then isn’t called, and the promise it returns is rejected with the same reason.
*/