const numbers=[25,21,27,20]
const result=numbers.find((number) => number>20)
console.log(result)

const numbers1=[25,21,27,20]
const result1=numbers1.some((number) => number>20)
console.log(result1)

const numbers2=[25,21,27,20]
const result2=numbers2.every((number) => number>20)
console.log(result2)

const subScore=[55,91,30,40]
const res=subScore.every((score) => score>40)
if(res)
    console.log("pass")
else
    console.log("fail")