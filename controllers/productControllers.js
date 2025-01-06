import Product from "../models/product.js";

export function addProduct(req,res){
    console.log(req.user)

    if(req.user == null){
        res.status(401).json({
            message : "Please login and try again"
        })
        return
    }
    if(req.user.type != "admin"){
        res.status(401).json({
            message : "You are not authorized"
        })
        return
    }

    const data = req.body;
    const newProduct = new Product(data);

    newProduct.save().then(
        ()=>{
            res.json({
                message : "Product added successfully"
            })
        }
    ).catch(
        (error)=>{
            res.status(500).json({
                message : "Product addition failed"
            })
        }
    )

}