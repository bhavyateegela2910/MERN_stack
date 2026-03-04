//closure function:inner function remembers outer function variable

// function outer(){
//     let n=1
//     function inner(){
//         return n++
//     }
//     return inner
// }
// const f=outer()
// console.log(f())
// console.log(f())
// function outer(){
//     let password="1234"
//     function inner(pwd){
//         if(password==pwd){
//             return "access"
//         }
//         else{
//             return "denied"
//         }
//     }
//     return inner

// }
// const check=outer()
// console.log(check(1234))
function outer(){
    let password="1234"
    function inner(pwd){
        return pwd==password?"access":"denied"
    }
    return inner

}
const check=outer()
console.log(check(1234))
