function Promise_all(p: any): Promise<any> {
  return new Promise((resolve, reject) => {
    let arr: any[] = [];
    let pl = p.length;
    for (let x = 0; x < pl; x++) {
      p[x].then((i: never) => {
        arr[x] = i;
        pl--;
        if (pl === 0) resolve(arr);
      }).catch(reject);
    } if (pl === 0) resolve(arr);
  });
}

// Test code.
Promise_all([]).then((array) => {
  console.log("This should be []:", array);
});
function soon(val: any) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}
Promise_all([soon(1), soon(2), soon(3)]).then((array) => {
  console.log("This should be [1, 2, 3]:", array);
});
Promise_all([soon(1), Promise.reject("X"), soon(3)])
  .then((array) => {
    console.log("We should not get here");
  })
  .catch((error) => {
    if (error !== "X") {
      console.log("Unexpected failure:", error);
    }
  });
