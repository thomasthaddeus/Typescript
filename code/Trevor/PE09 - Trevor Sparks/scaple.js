async function locateScalpel(nest){
    current_name = nest.name;
    for(let i=0; i<100; i++){
        console.log("We are currently looking at: " + current_name);
        
    }   
}


async function locateScalpel2(nest){
    console.log(nest);
    return new Promise((resolve, reject) =>{
        // trying to find the scalpel
        let found  = false;
        while(!found){
            anyStorage(nest, nest.name, 'scalpel')
                .then(next_nest_name =>{
                    if(next_nest_name == nest.name){
                        found = true;
                        resolve("found it!");
                    }
                })
                .catch(err => {
                    reject("did not find it");
                })
        }
    })
}