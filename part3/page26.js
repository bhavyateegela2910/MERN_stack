///spread operator:uses to reassign the object and add the values

// const items={
//     name:"product",
//     price:250,
//     quantity:3
// }
// const obj={... items,rating:4}
// console.log(obj) 

//reassign
let items={
    name:"sonu",
    price:"290",
    quantity:3
}
items={... items,rating:4}
console.log(items)