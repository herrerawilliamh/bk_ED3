/*ARCHIVO EN CONSTRUCCIÓN*/
import { promises } from 'fs'

// class ProductManager{
//     constructor(){
//         this.products=[]
//         this.path
//     }
//     getProducts(){
//         return this.products
//     }
//     addProduct(title, description, price, thumbnail, code, stock){
//         const product_id=this.products.length+1
//         const required_fields = this.products.includes("")
//         if(required_fields){
//             console.log("Debes completar todos los campos")
//             return
//         }
//         const code_found =this.products.find((product)=>product.code===product.code)
//         if(code_found){
//             console.log("Código de producto encontrado, debes cambiar el Código de producto")
//             return
//         }
//         const product={
//             id:product_id,
//             title,
//             description,
//             price,
//             thumbnail,
//             code,
//             stock
//         }
//         this.products.push(product)
//     }
//     getProducts(){
//         try {
//             const data_reading = fs.readFileSync("data.json", "utf-8")
//             const data_products = JSON.parse(data_reading)
//             return data_products
//         } catch (error) {
//             console.error("Error de lectura", error);
//         }   
//     }
//     getProductsById(id){
//         const data_reading = this.getProducts()
//         const product_found = data_reading.find((product)=>product.id===id)
//         if(!product_found){
//             console.log("Product Not Found")
//             return
//         }
//         console.log(product_found)
//     }
//     updateProduct(id, campo, dato){
//         const data_reading = this.getProducts()
//         const product_found = data_reading.find((product)=>product.id===id)
//         if(!product_found){
//             console.log("Product Not Found")
//             return
//         }
//         if(product_found[campo] === dato){
//             console.log("Se esperaba un cambio en el dato")
//         } else{
//             product_found[campo] = dato
//             fs.writeFileSync("data.json", JSON.stringify(data_reading, null, 2))
//             console.log("Archivo actualizado exitosamente")
//         } 
//     }
//     deleteProduct(id){
//         const data_reading = this.getProducts()
//         const product_found = data_reading.find((product)=>product.id===id)
//         if(!product_found){
//             console.log("Product Not Found")
//             return
//         }
//         const index = data_reading.indexOf(product_found)
//         data_reading.splice(index, 1)
//         fs.writeFileSync("data.json", JSON.stringify(data_reading, null, 2))
//         console.log("Producto eliminado exitosamente")
//     }

// }

// const productManager = new ProductManager()
// // console.log(productManager.getProducts())
// // productManager.getProductsById(2)
// // productManager.updateProduct(2, "title","Muffin - Mix - Strawberry Rhubarb 2")
// // productManager.deleteProduct(2)