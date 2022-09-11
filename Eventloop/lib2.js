console.log("Start");

function addition(a, b){
    return a+b;
}
function subtraction(a, b){
    return (Math.abs(a-b));
}


console.log("End")

module.exports = {
    addition : addition,
    subtraction : subtraction
}

