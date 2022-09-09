
let fs = require('fs')
console.log("before");

// fs.readFile('f1.txt', cb1);

// fs.readFile('f2.txt', cb2);

// fs.readFile('f3.txt', cb3)

// function cb1(err, data){
    
    
//         console.log("content "+ data);
    
// }

// function cb2(err, data){
//     // if(err){
//     //     console.log(err);
//     // }
//     // else{
//         console.log("content "+data);
//     // }
// }
// function cb3(err, data){
//     // if(err){
//     //     console.log(err);
//     // }
//     // else{
//         console.log("content "+ data);
//     // }   
// }
// console.log("after")



// console.log("In this program files are read randomly they guve all time diffrent output")
// node api FIFO FIFI pr kaam nh krta 
// jb bh koi process execute ho jaye use call queue m bhej deta to kbhi f1, f2, f3 randomly exeecute hoge



// so how to execute it in line
console.log();
console.log("___________________________________________")

fs = require("fs");
fs.readFile('f1.txt', cb);

// so i want all to execute linearly;

function cb(err, data){
    console.log("conent "+data);
    fs.readFile('f2.txt', cb1);
    function cb1(err, data){
        console.log("conent "+data);
        fs.readFile('f3.txt', cb2);
        function cb2(err, data){
            console.log("conent "+data);
        }
    }

}

console.log("after")



