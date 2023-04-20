const Product = require("../models/product")
const Blog = require("../models/blog")

const getAllProducts = async(req,res) => {
    const {category,authorName,title} = req.query;
    const queryObject = {};

    if (category){
        queryObject.category = category;
        console.log(queryObject.category)
    }
    if(authorName){
        queryObject.authorName = {$regex:authorName, $options: "i"};
    }
    if(title){
        queryObject.title = title;
    }
    console.log(queryObject);

    const myData = await Product.find(queryObject);
    res.status(200).json({myData})

};

const getAllProductsTesting = async(req,res) => {
    const myBlog = await Product.find(req.query); 
    res.status(200).json({myBlog})
};
const getAllBlogs = async(req,res) => {
    const myBlog = await Blog.find(req.query); 
    res.status(200).json({myBlog})
};

module.exports = {getAllProducts,getAllProductsTesting,getAllBlogs}