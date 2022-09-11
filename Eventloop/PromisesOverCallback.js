let lib = require('./lib');

let amount = 2000;
let toCut = 200;


function chargeAccount(){
    amount = amount-toCut;
    console.log(`Remaining amount is : ${amount}`);
}

let promiseObj = lib.updateAccPromise("Tv").then(chargeAccount);



// lib.updateAcc('tv', chargeAccount);


