console.log("start");
function updateAcc(product, cb) {
    setTimeout(() => {
        console.log(product + "Purchased");
        cb();
        // if we made such mistake then function called many times

        cb();
        cb();
    }, 2000)
}


function updateAccPromise(product){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve();
            // reject();
        }, 2000)
    })
}


module.exports = {
    updateAcc : updateAcc,
    updateAccPromise : updateAccPromise
}

