const Product=require('../models/productModel')

// to post product
exports.postProduct= async(req,res)=>{
    let product = await Product.findOne({ title: req.body.title })
    if (product) {
        return res.status(400).json({ error: "Product already exists" })
    }
    product= await Product.create({
        title:req.body.title,
        img:req.file.path,
        author:req.body.author,
        price:req.body.price,
        synopsis:req.body.synopsis,
        yop: req.body.yop,
        nop: req.body.nop,
        isbn: req.body.isbn,
        language: req.body.language,
        stock:req.body.stock
    })
    if(!product){
        return res.status(400).json({error:"Something went wrong"})

    }
    res.send(product)

    // Product.findOne({
    //     title:product.title
    // })
    // .then(async products=>{
    //     if(products){
    //         return res.status(403).json({error:'Product name must be unique'})
    //     }
    //     else{
    //         product=await product.save()

    //         if(!product){
    //             return res.status(400).json({error:'Something went wrong'})
    //         }
    //         res.send(product)
    //     }
    // })
    // .catch(err=>console.log(err))
}

// to show all products
exports.allProduct=async(req,res)=>{
    const product=await Product.find()

    if(!product){
        return res.status(400).json({error:'Something went wrong'})
    }
    res.send(product)
}

// to display product detail
exports.productDetail=async(req,res)=>{
    const product= await Product.findById(req.params.id)

    if(!product){
        return res.status(400).json({error:'Something went wrong'})
    }
    res.send(product)
}

// update product
exports.updateProduct=async(req,res)=>{

    if(req.file){
        var formData={
            product_name:req.body.product_name,
                product_price:req.body.product_price,
                countInStock:req.body.countInStock,
                product_description:req.body.product_description,
                // product_image:req.body.product_image,
                product_image:req.file.path,
                category:req.body.category
        }
    }
    else{
        var formData={
            product_name:req.body.product_name,
                product_price:req.body.product_price,
                countInStock:req.body.countInStock,
                product_description:req.body.product_description,
                category:req.body.category
        }
    }
    const product= await Product.findByIdAndUpdate(
        req.params.id,
        formData,
        {new:true}
        )

        if(!product){
            return res.status(400).json({error:'Something went wrong!!!'})
        }
        res.send(product)
}

// delete product
exports.deleteProduct=(req,res)=>{
    Product.findByIdAndDelete(req.params.id)
    .then(products=>{
        if(!products){
            return res.status(403).json({error:'Product not found'})
        }
        else{
            return res.status(200).json({error:'Product deleted successfully'})
        }
    })
    .catch(err=>{
        return res.status(400).json({error:err})
    })
}