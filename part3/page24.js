//creating the variable another and storing the value of another key

const employee={
    name:"sonu",
    city:"hyderabad",
    state:"telangana",
    country:"india"

}
//const name=employee.name
//const city=employee.city
//destructing the object
const {name, city}=employee
console.log(name)
console.log(city)