const mongoose=require('mongoose')
const {ObjectId}=mongoose.Schema

const productSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true,
        // trim:true
    },
    synopsis:{
        type:String,
        required:true,
        // trim:true
    },
    stock:{
        type:Number,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    yop: {
        type:Number,
        required:true
    },
    nop: {
        type:Number,
        required:true
    },
    isbn:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model('Product',productSchema)