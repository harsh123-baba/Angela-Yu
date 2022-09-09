function placeOrder(drink){
    return new Promise (function(resolve, reject){
        if(drink === 'coffee'){
            resolve("Order Placed");
        }
        else{
            reject(`we dont have ${drink}`);
        }
    })
}

//process order m reject ka kya kaam
// rejected order already bhar ho gya game s hasne wala emoji
// i wasted my 2 days to understand this



function processOrder(order){
    return new Promise(function(resolve){
        console.log("order is being processed");
        resolve(`Coffee served for the ${order}` );
    })
      
}


//promises scenario with promise funda

// placeOrder("coffee").then(function(orderFromCustomer){
//     console.log("Request Recived");
//     let orderIsProcessed = processOrder(orderFromCustomer);
//     return orderIsProcessed;

// }).then(function(orderIsProcessed){
//     console.log(orderIsProcessed);
// }).catch(function(err){
//     console.log(err);
// })


//optimization
// promises scenario with Async-Await


async function serveOrder(){

    try {
        const orderRecived = await placeOrder('coffee') 
        console.log(orderRecived);
        const processedOrder = processOrder(orderRecived);
        console.log(processedOrder);
        
    } catch (error) {
        console.log(error);   
    }

}


serveOrder()





