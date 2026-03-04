// function greet(name,callback){
//     callback();
// }
// greet("sonu",()=>{
//     console.log("Hello");
// });
function greet(name,callback){
   callback();
   console.log("welcome"+name)
 }
 greet("sonu",()=>{
     console.log("Hello");
 });
