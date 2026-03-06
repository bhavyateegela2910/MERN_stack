
import express from "express"

const app = express()

app.set("view engine","ejs")
app.set("views","views")

// Middleware to read form data
app.use(express.urlencoded({ extended: true }))

app.listen(8080,()=>console.log("server started"))

let users = [
    {name:"poojitha",email:"pooji@gmail.com",password:1234},
    {name:"sonu",email:"sonu@gmail.com",password:1234},
    {name:"sai",email:"sai@gmail.com",password:1234},
]

app.get("/login",(req,res)=>{
    res.render("login")
})

app.post("/login",(req,res)=>{
    const {email,password} = req.body

    const user = users.find((user)=> user.email === email)

    if(user){
        if(user.password == password){
            res.redirect("/")
        }
        else{
            res.redirect("login")
        }
    }
    else{
        res.redirect("login")
    }
    res.redirect("login")
})

app.get("/register",(req,res)=>{
    res.render("register")
})

app.get("/",(req,res)=>{
    res.render("dashboard",{users})
})