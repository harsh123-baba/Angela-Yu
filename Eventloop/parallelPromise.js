// here i am going to do file read with promise

const fs = require('fs').promises;
const arr = ['./f1.txt', './f2.txt', './f3.txt'];

for(let i = 0; i<arr.length; i++){
    let fileReadPromise = fs.readFile(arr[i]);
    fileReadPromise.then(cb);
}

function cb(data){
    console.log("content -> "+data);
}

