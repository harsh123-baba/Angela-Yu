const PENDING  = 0;
const FULFILL = 1;
const REJECTED = 2;



function customPromise(executor){
    let state = PENDING;
    let value = null;
    let catcher = [];
    let handler = [];


    function resolve(result){
        if(state !== PENDING){
            return;        
        }
        
        state = FULFILL;
        value = result;
        
        handler.forEach((h) => h(value) );
    }
    function reject(err){
        if(state != PENDING){
            return;
        }
        state = REJECTED;
        value = err;

        catcher.forEach((c) => c(value));
    }

    this.then = function(successCallback){
        if(state === FULFILL){
            successCallback(value);
        }
        else{
            handler.push(successCallback)
        }
    }
    this.catch = function(failureCallback){
        if(state == REJECTED){
            failureCallback(value);
        }
        else{
            catcher.push(failureCallback);
        }
    }

    executor(resolve, reject);
}


const doWork = (res, rej)=>{
    if(2==12){
        setTimeout(() => {
            res("DOne")
        }, 1000);
    }
    else{
        setTimeout(() => {
            rej("Not Done")
        }, 1000);
    }
}



let greetMsg = new customPromise(doWork);


greetMsg.then((val) => {
    console.log("then log", val);
})
greetMsg.catch((val) => {
    console.log("catch log", val);
})




