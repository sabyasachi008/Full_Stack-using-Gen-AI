const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const path = require("path");

const Product = require("Product");
const CartItem = require("CartItem");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.json(__dirname, "public")));

mongooose.connect()
.then(() => console.log("MongoDB connected"));


//Creation of API


app.get("/api/products/seed", async (req, res) => {

    const products = await Product.find();
    res.json(products);

})


//Seed Products
app.post("/api/product/seed", async (req, res) => {

    const products = await Product.insertMany([

        {name:"Laptop", price:60000},
        {name:"Mouse", price:800},
        {name: "Keyboard", price:1500};
    ])
})

app.post("/api/products/seed", async (req, res) => {

    const {productId} = req.body;

    let item = await CartItem.findOne({productId});     //got the item from cart

    //if item exists
    if(item){
        item.quantity++;            //increase quantity
        await item.save();
    }else{      
        //create a item
        item = await CartItem.create({productId});
    }
})

//Remove  -> delete
app.delete("api/cart/:id", async (req, res) => {

    await CartItem.findIdAndDelete(req.params.id);

    res.json({message:"Item Delete"})

})


//delete all

app.listen(3000, ()=> console.log("Server Running!"));