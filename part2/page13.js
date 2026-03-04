const obj = {
  name: "wipro",
  lastprice: 200,
  currprice: 250
}

console.log(obj.lastprice)

obj.growth = obj.currprice - obj.lastprice

console.log(obj)

obj.percentage = (obj.growth * 100) / obj.lastprice

console.log(obj)