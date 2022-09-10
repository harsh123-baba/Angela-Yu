const fs = require('fs').promises;
console.log("start");

const arr = ['./f1.txt', './f2.txt', './f3.txt'];

let readFilePromise = fs.readFile(arr[0]);

for(let i = 1; i<arr.length; i++){
    readFilePromise = readFilePromise.then((data)=>{
        console.log("Content : "+data);
        return fs.readFile(arr[i]); 
    })
} 

readFilePromise.then((data)=>{
    console.log("content : "+data)
})

console.log("End");