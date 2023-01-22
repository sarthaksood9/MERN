// const { create } = require("../models/productModels");
const Product = require("../models/productModels");



// create product

exports.createProduct= async (req,res,next) => { 

    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}


exports.getAllProtucts =(req,res)=>{

    res.status(200).json({message:"Route is working fine"})
}