let p1 = new Promise((resolve, reject) => {
    let v = Math.random();
    if(v >= .25){
        resolve("Success")   
    }else{
        reject("Failed")
    }
})

let p2 = new Promise((resolve, reject) => {
    let v = Math.random();
    if(v >= .25){
        resolve("Success")   
    }else{
        reject("Failed")
    }
})

let p3 = new Promise((resolve, reject) => {
    let v = Math.random();
    if(v >= .25){
        resolve("Success")   
    }else{
        reject("Failed")
    }
})

let arrayOfPromises = [p1, p2, p3];

function promise_all(arrayOfPromises){
    let returnValues = [];
    for (let index = 0; index < arrayOfPromises.length; ++index) {
        const element = arrayOfPromises[index];
        elementValue = null;
        element.then((message) =>{
            returnValues.push(message);
        }).catch(() =>{
            return null;
        })
    }
}

promise_all(arrayOfPromises);