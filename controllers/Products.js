import Product from "../models/productModel.js";

export const getAllProducts = async (req,res) => {

    try{
        const products = await Product.findAll();
        res.json(products);
    }catch(error){
        res.json({message: error.message});
    }
}

export const createProduct = async (req,res) => {

    try{
        
        let newData  = req.body;
        
        // console.log(newData);
        newData.forEach(async element => {    
            await Product.create(element);
        });

        res.json({
            "message" : "Product success created"
        });
    }catch(error){
        res.json({message: error.message});
    }
}
export const getProductById = async (req,res) => {

    try{
        const products = await Product.findAll({
            where : {
                id : req.params.id
            }
        });
        res.json(products[0]);
    }catch(error){
        res.json({message: error.message});
    }
}
export const updateProduct = async (req,res) => {

    try{
        await Product.update(req.body,{
            where : {
                id : req.params.id
            }
        });
        res.json({
            message : "Update product success"
        });
    }catch(error){
        res.json({message: error.message});
    }
}
export const deleteProductById = async (req,res) => {

    try{
        await Product.destroy({
            where : {
                id : req.params.id
            }
        });
        res.json({
            message : "Delete product success"
        });
    }catch(error){
        res.json({message: error.message});
    }
}