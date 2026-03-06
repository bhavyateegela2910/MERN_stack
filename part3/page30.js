// setTimeout(()=>{},1000)
console.log("begining")
setTimeout(()=>{ console.log("hello world")},3000)
console.log("Ending")

/*function f1(){
    console.log("begining")
}
function f2(){
    setTimeout(()=>{ console.log("hello world")},3000)
}
function f3(){
    console.log("Ending")
}
function main(){
    f1()
    f2()
    f3()
}
main()*/
function f1(){
    console.log("begining")
}
function f2(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{ console.log("hello world")
    //resolve()
    reject("something went wrong");
    },3000);
});
}
function f3(){
    console.log("Ending")
}
async function main(){
    try {
    f1();
     await f2();
    f3();

}
catch(err){
    console.log(err);

}
}
main();