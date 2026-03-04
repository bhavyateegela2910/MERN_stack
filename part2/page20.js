//object:reference type of variable
// const obj={
//     name:"sonu",
//     skill:"python"
// };
// console.log(obj)

//another way of declaring
 const obj=new Object()
obj.name="rithish"
obj.skill="python"
console.log(obj)

//adding the new key
let key="city"
let value="hyderabad"

obj[key]="rajahmundry"
delete obj.skill//to delete the key
console.log(obj)

