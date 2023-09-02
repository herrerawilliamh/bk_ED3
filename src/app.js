import express from "express/index.js";

import ProductManager from "./ProductManager.js";

const app = express();
const PORT = 8080

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});

app.get("/",(req,res)=>{
    res.send("Hello World")
});

const productManager = new ProductManager();

app.get("/products", (req, res)=>{
    productManager.getProducts((error, products) => {
        if(error){
            res.status(500).send(error);
        }else{
            res.status(200).json(products);
        }
    });
});

app.get("/products/:id", (req, res)=>{
    const id = req.params.id;
    productManager.getProductsById(id, (error, product) => {
        if(error){
            res.status(500).send(error);
        }else{
            res.status(200).json(product);
        }
    });
});