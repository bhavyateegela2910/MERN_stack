//first display the items using foereach loop
//add the cart itrms
//display the cart items

const products=[
    {id:1,name:"product1",price:25},
    {id:2,name:"product2",price:30},
    {id:3,name:"product3",price:20}
];
//display the items
function displayProducts(){
products.forEach((products)=>{
    console.log(products)
});
}
//add items to the cart
let cart=[];
function addtocart(id){
   const product= products.find((product)=>{
    return product.id===id
})

   if(product){
cart=[...cart,{...product,quantity:1}]
   }
}
function display(){
    console.log(cart)
}
displayProducts()
addtocart(2)
display()