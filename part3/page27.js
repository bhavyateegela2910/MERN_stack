//let employees=["sonu","bunty","pratap",'poojitha']
let employees=new Array("sonu","bunty","pratap",'poojitha')
// employees=[... employees,"brain"]//spread operator
// employees.push("sai")//to add an element
// console.log(employees.length)//length of an array
// console.log(employees[2])//to access the element
// console.log(employees)

//looping an array
// for(let i=0;i<employees.length;i++){
//     console.log(employees[i])
// }

//new way of looping
for(let a of employees){
    console.log(a)
}
