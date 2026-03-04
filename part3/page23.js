//loop through object
const employee={
    name:"sonu",
    city:"hyderabad",
    age:20,
    country:"infia"
}
//looping the each key in object
for(let key in employee){
    console.log(key)
   console.log(key,employee[key])//key values are printed
   
}
console.log(Object.keys(employee))//only keys in array printed
console.log(Object.values(employee))//only values in array printed
console.log(Object.entries(employee))//entru obj is printed in array
console.log(typeof employee.age)