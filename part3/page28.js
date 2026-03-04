let numbers=[25,26,27,28]
// for(let i=0;i<numbers.length;i++){
//     console.log(numbers[i])
// }

//another way is "forEach"
// numbers.forEach((number)=>{
//     console.log(number)
// })


//map method
// numbers.map((number)=>{
//     console.log(number)
// })

//map method is used to loop and also new array with same or modified arrays
//creating new array by adding values to each other
// let newArray=numbers.map((number)=>{
//     console.log(number)
// })

//filter method:creates new array
//new array it consists filtered values and existing same value
// let newArray=numbers.filter((number)=>{
//     console.log(number+3)
// })


//find method
//same as filter but instead of returning array it returns value

let newArray=numbers.find((number)=>{
    console.log(number>26)
})
