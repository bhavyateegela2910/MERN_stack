//the value of key can be a function in object

const employee={
    name:"sonu",
    basic:500,
    bonus:100,
    salary:function(){
        console.log(this.basic+this.bonus)//this is used to access the another "key-value" in the object
    }
}
employee.salary()