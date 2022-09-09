
console.log("before the code")
const fs = require('fs');


fs.readFile('f1.txt', cb);
function cb(err, data){
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log("content "+data);
    }        

}

console.log("End of the code")