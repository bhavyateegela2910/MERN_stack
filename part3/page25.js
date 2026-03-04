const stock={
    name:"wipro",
    lastprice:200,
    currprice:250,
    growth:function(){
        console.log(this.currprice-this.lastprice)
    },
    growthpercentage:function(){
        console.log((this.currprice-this.lastprice)*100/this.lastprice)
    }

}
stock.growth()
stock.growthpercentage()
//arrow function does not have this keyword