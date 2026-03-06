function placeOrder(){
    console.log("Order has been placed");
}
function makePayment(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{console.log("Payment has been processed");
            resolve()
        },3000);
    });
}
function sendConfirmation(){
    console.log("confirmation has been sent ")
}
async function main(){
    try{
        placeOrder()
        await makePayment()
        sendConfirmation()

    }
    catch(err){
        console.log("error")
    }
}
main();