import express from "express"
const app=express()
const productRouter=express.Router();
const userRouter=express.Router();
productRouter.get("/list",(req,res)=>{
    res.send("Product list");
});
userRouter.get("/list",(req,res)=>{
 res.send("User list")
})
app.use("/products",productRouter);
app.use("/user",userRouter)
app.listen(8080,() => console.log("server strated"));