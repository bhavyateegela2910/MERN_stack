let a = 10
console.log(a) // 10   (can’t re-declare)

var b = 20
console.log(b) // 20   (can be both re-declared and re-assigned)

const c = 30
console.log(c) // 30   (can’t re-assign or re-declare)
//hoisting
var a
console.log(a) // undefined
a=10
console.log(a) // ReferenceError – cannot access before initialization
let a = 10
let a
console.log(a) // undefined
a = 10
